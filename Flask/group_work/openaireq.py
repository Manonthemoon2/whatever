import openai
openai.organization = "org-rHdbbV2MAyPY28iF7ayK1HpI"

openai.api_key = "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"

# typeOfThing = input("movie, book, or song? ")
# nameOfThing = input("enter the name of the " + typeOfThing + ": ")

typeOfThing = "movie"
nameOfThing = "the great gatsby"

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="name 3 " + typeOfThing + "s similar to " + nameOfThing,
  temperature=0.7,
  max_tokens=256
)

print(response["choices"][0]["text"]);

with open('data.json', 'w') as f:
  f.write(response["choices"][0]["text"])


from flask import Flask

app = Flask(__name__)

@app.route('/my-python-function')
def my_python_function():
    return 'Hello from Python!'