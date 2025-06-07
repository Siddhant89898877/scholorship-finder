import requests

response = requests.post("http://127.0.0.1:8000/scrape")
print("Status Code:", response.status_code)

try:
    data = response.json()
    print("Returned JSON:", data)
except Exception as e:
    print("Could not decode JSON. Response was:")
    print(response.text)
test_match.py

