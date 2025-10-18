import favicon

def get_favicon(website_url: str):
    try:
        print(f"Fetching website_url", website_url)
        icons = favicon.get(website_url)
        if icons:
            return icons[0].url # Biggest icon
        else:
            return None
    except Exception as e:
        print(f"Error fetching favicon: {e}")
        return None