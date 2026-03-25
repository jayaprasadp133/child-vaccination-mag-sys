from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Child, Vaccine
import random

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Child Vaccine Management System Backend Running"

# REGISTER CHILD
@app.route('/register_child', methods=['POST'])
def register_child():
    data = request.json

    reg_no = random.randint(10000, 99999)

    child = Child(
        reg_no=reg_no,
        name=data['name'],
        dob=data['dob'],
        parent_name=data['parent_name'],
        phone=data['phone']
    )

    db.session.add(child)
    db.session.commit()

    return jsonify({
        "message": "Child Registered",
        "register_number": reg_no
    })

# GET ALL CHILDREN
@app.route('/children')
def get_children():
    children = Child.query.all()

    return jsonify([
        {
            "id": c.id,
            "name": c.name,
            "dob": c.dob,
            "parent": c.parent_name,
            "phone": c.phone,
            "reg_no": c.reg_no
        }
        for c in children
    ])

# SEARCH BY REGISTER NUMBER
@app.route('/child/<int:reg_no>')
def get_child(reg_no):
    child = Child.query.filter_by(reg_no=reg_no).first()

    if not child:
        return jsonify({"error": "Not found"}), 404

    return jsonify({
        "name": child.name,
        "dob": child.dob,
        "parent": child.parent_name,
        "phone": child.phone,
        "vaccinated": child.vaccinated_count,
        "pending": child.pending_count
    })

# DELETE CHILD
@app.route('/delete_child/<int:id>', methods=['DELETE'])
def delete_child(id):
    child = db.session.get(Child, id)

    if not child:
        return jsonify({"error": "Not found"}), 404

    db.session.delete(child)
    db.session.commit()
    return jsonify({"message": "Child deleted"})

# CHILD DETAILS
@app.route('/child_details/<int:id>')
def child_details(id):
    child = db.session.get(Child, id)

    if not child:
        return jsonify({"error": "Not found"}), 404

    return jsonify({
        "name": child.name,
        "dob": child.dob,
        "parent": child.parent_name,
        "phone": child.phone,
        "reg_no": child.reg_no,
        "vaccinated": child.vaccinated_count,
        "pending": child.pending_count
    })

if __name__ == '__main__':
    app.run(debug=True, port=5001)