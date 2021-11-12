import pprint

import telegram
import os
import sys
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import tasks
import random

TELEGRAM_TOKEN = os.environ.get("TELEGRAM_TOKEN")
if TELEGRAM_TOKEN is None:
    print("TELEGRAM_TOKEN 환경변수를 지정해주세요.", file=sys.stderr)
    sys.exit(1)  # 종료 상탯값을 1로 지정하고, 프로그램 종료 - 정상종료는 0

updater = Updater(token=TELEGRAM_TOKEN, use_context=True)
dispatcher = updater.dispatcher

def start(update, context):
    """대화방이 처음 열리면 자동으로 호출되는 함수"""

    context.bot.send_message(
        chat_id=update.effective_chat_id,
        text="안녕, 나는 longlongbot이야. 만나서 반가워"
    )

def echo(update, context):
    received_text: str = update.message.text

    supported_tasks = [
        tasks.ya,
        tasks.dice,
        tasks.naver_search,
        tasks.reverse,
        tasks.get_current_lotto_numbers,
        tasks.numbers_add,
    ]

    for task in supported_tasks:
        if task.check_available(received_text):
            response_text = task.make_response(received_text)
            break
    else:
        response_text = "지원하지 않는 명령입니다"

    # if tasks.ya.check_available(received_text):
    #     response_text = tasks.ya.make_response(received_text)
    #
    # elif tasks.dice.check_available(received_text):
    #     response_text = tasks.dice.make_response(received_text)
    #
    # elif tasks.naver_search.check_available(received_text):
    #     response_text = tasks.naver_search.make_response(received_text)

    #더하기: 2, 3, 4

    # elif tasks.reverse.check_available(received_text):
    #     response_text = tasks.reverse.make_response(received_text)
    # elif tasks.multiply.check_available(received_text):
    #     response_text = tasks.multiply.make_response(received_text)





    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text=response_text)

    # if received_text == "야":
    #     reply_text = "왜?"
    # elif received_text.startswith("네이버검색:"):
    #     query = received_text[7:]
    #     post_list = tasks.naver_search(query)
    #     reply_text = ""
    #     for post in post_list:
    #         reply_text += post["title"] + "\n"
    # else:
    #     reply_text = "지원하지 않는 명령입니다."







start_handler = CommandHandler("start", start)
dispatcher.add_handler(start_handler)

echo_handler = MessageHandler(
    Filters.text & (~Filters.command), echo)

dispatcher.add_handler(echo_handler)

updater.start_polling()
updater.idle()

# bot = telegram.Bot(token)
#
# # info = bot.getMe()
# # pprint.pprint(info)
#
# # resp = bot.getUpdates()
# # pprint.pprint(resp)
#
# chat_id = 2142193304
# bot.sendMessage(chat_id=chat_id, text="안녕, 나는 봇이야")
