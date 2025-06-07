from typing import List
from app.schemas import Scholarship, StudentProfile
from app.storage import scholarships_db

def save_scholarships(scholarships: List[Scholarship]):
    scholarships_db.clear()
    scholarships_db.extend(scholarships)

def get_matching_scholarships(student: StudentProfile) -> List[Scholarship]:
   
    return scholarships_db
