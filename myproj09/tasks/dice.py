import random

def check_available(received_text: str) -> bool:
    return received_text == "주사위"

def make_response(received_text: str) -> str:
    return str(random.randint(1, 6))

