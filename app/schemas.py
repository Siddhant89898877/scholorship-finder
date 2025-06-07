scholarship-finder-backend/app/schemas.py
from pydantic import BaseModel
from typing import Optional

from pydantic import BaseModel

class Scholarship(BaseModel):
    title: str
    eligibility: str
    deadline: str
    amount: str
    link: str

class StudentProfile(BaseModel):
    caste: str
    grade: float  
    college: str
    state: str

