import json

with open('top1000.txt', 'r') as text_file:
    words = text_file.read().split('\n')
    words_list = []
    for word in words:
        if len(word) > 2:  
            words_list.append(word)
    words_dict = {'words': words_list}
    with open('top1000.json', 'w') as output_file:
        json.dump(words_dict, output_file)