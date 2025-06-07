
from fastapi import APIRouter
from typing import List
from app.schemas import Scholarship, StudentProfile
from app.scraping.scraper import scrape_scholarships_com
from app.crud import save_scholarships, get_matching_scholarships

router = APIRouter()

@router.post("/scrape", response_model=List[Scholarship])
def scrape():
    scholarships = scrape_scholarships_com()
    save_scholarships(scholarships)
    return scholarships

@router.post("/match", response_model=List[Scholarship])
def match_scholarships(student: StudentProfile):
    results = get_matching_scholarships(student)
    return results
