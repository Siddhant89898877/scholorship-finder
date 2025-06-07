import requests

url = "http://127.0.0.1:8000/scrape"

try:
    response = requests.post(url)
    if response.status_code == 200:
        data = response.json()
        if data:
            print("🎓 Scholarships fetched successfully:\n")
            for i, item in enumerate(data, 1):
                print(f"{i}. {item['title']}")
                print(f"   Link: {item['link']}")
                print(f"   Amount: {item['amount']}")
                print(f"   Deadline: {item['deadline']}")
                print(f"   Eligibility: {item['eligibility']}")
                print()
        else:
            print("⚠️ No scholarships found.")
    else:
        print(f"❌ Error: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"❗ Exception occurred: {e}")
