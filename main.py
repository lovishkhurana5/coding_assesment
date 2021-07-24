import json
def generateAndInsertOddNumbers(n=20):
    first20OddNumbers = [i for i in range(n * 2) if i % 2 != 0]
    word = "LuxPMsoft"
    res = ""
    for w in range(len(word)):
        res += word[w] + (str(first20OddNumbers[-w-1]) if len(word) != w+1 else "")
    return res

print(json.dumps({"word" : generateAndInsertOddNumbers(20)}))