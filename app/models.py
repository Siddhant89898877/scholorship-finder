def format_scholarship(scholarship) -> dict:
    return {
        "id": str(scholarship.get("_id")),
        "title": scholarship.get("title"),
        "eligibility": scholarship.get("eligibility"),
        "deadline": scholarship.get("deadline"),
        "amount": scholarship.get("amount"),
        "link": scholarship.get("link"),
    }
