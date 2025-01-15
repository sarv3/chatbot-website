from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json['message']  # Get user input from frontend
    
    # Basic responses based on keywords
    if 'services' in user_input.lower():
        response = "We offer services like text summarization, sentiment analysis, and movie genre classification."
    elif 'movie genre' in user_input.lower():
        response = "We can classify movies into various genres like Action, Drama, Comedy, and more."
    elif 'hello' in user_input.lower():
        response = "Hello! How can I assist you today?"
    else:
        response = "Sorry, I didn't quite understand that. Can you please ask about our services?"

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
