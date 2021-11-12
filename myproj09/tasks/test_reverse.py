from . import reverse

def test_reverse():
    assert reverse.check_available("거꾸로: 안녕")
    assert reverse.make_response("거꾸로: 안녕") == "녕안"