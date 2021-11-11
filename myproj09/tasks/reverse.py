def check_available(received_text: str) -> bool:
    return len(received_text) == 3

def make_response(received_text: str) -> str:
    reversed_text = reversed(received_text)
    reversed_text_list = list(reversed_text)
    return reversed_text_list
