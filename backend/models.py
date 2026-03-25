from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Child(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reg_no = db.Column(db.Integer, unique=True)
    name = db.Column(db.String(100))
    dob = db.Column(db.String(20))
    parent_name = db.Column(db.String(100))
    phone = db.Column(db.String(15))
    vaccinated_count = db.Column(db.Integer, default=0)
    pending_count = db.Column(db.Integer, default=10)

class Vaccine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    child_id = db.Column(db.Integer)
    vaccine_name = db.Column(db.String(100))
    due_date = db.Column(db.String(20))
    status = db.Column(db.String(20))