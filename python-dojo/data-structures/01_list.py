my_list: list = [7, "cat", True]
print(my_list)

print(my_list[0])
# 7

#______________________________________________________________________________
# SECTION: .sort()

# NOTE: How to create a new list without modifying the original
scores: list = [76, 6, 10, 5, 47]
sorted_list: list = sorted(scores)
print(sorted_list)

# NOTE: If you wanted to moify the original then do this:
original_numbers: list = [56, 10, 3, 7]
original_numbers.sort()
print(original_numbers)

#______________________________________________________________________________
# SECTION: .append()

player_scores = [16, 20, 28]
print(player_scores)
# [16, 20, 28]

player_scores.append(90)
print(player_scores)
# [16, 20, 28, 90]

#______________________________________________________________________________
