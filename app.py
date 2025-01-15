from flask import Flask, request, jsonify

app = Flask(__name__)

# Define the chatbot logic
@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json.get('message', '').lower()
    response = ""

    # Define chatbot responses
    if 'services' in user_input:
        response = "We offer services like text summarization, sentiment analysis, and movie genre classification."
    elif 'movie genre' in user_input:
        response = "We can classify movies into genres like Action, Drama, and Comedy."
    elif 'hello' in user_input or 'hi' in user_input:
        response = "Hello! How can I assist you today?"
    else:
        response = "I'm sorry, I didn’t understand that. Can you ask about our language services?"

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)


import requests

url = "http://127.0.0.1:5000/chatbot"
response = requests.post(url, json={"message": "What services do you offer?"})
print(response.json())
