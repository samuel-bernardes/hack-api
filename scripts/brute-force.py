import requests
from time import sleep

# ler arquivo
with open("scripts/data/passwords.txt", "r", encoding="utf8") as f:
    wordlist = [line.strip() for line in f.readlines() if line.strip()]

target = "http://localhost:3000/login"
user = "admin"
count = 0

for pw in wordlist:
    try:
        resp = requests.post(target, json={"user": user, "password": pw}, timeout=3)

        # protegido por rate-limit
        if resp.status_code == 429:
            print(f"\n[BLOCKED BY RATE LIMIT] -> tentou '{pw}'")
            break

        if resp.status_code == 200:
            print(f"\n[FOUND] {pw} {resp.json()}")
            print(f"Tentou {count} vezes")
            break

        count+=1

    except Exception as e:
        print("x", end="", flush=True)

print("\nDone.")
