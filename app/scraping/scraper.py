# scholarship-finder-backend/app/scraping/scraper.py
import requests
from bs4 import BeautifulSoup

def scrape_scholarships_com():
    url = "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-major/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    scholarships = []
    for item in soup.select("div.main-content ul li a")[:10]:
        title = item.text.strip()
        link = "https://www.scholarships.com" + item.get("href")
        scholarships.append({
            "title": title,
            "eligibility": "Not listed",
            "deadline": "Not listed",
            "amount": "Varies",
            "link": link
        })

    return scholarships


