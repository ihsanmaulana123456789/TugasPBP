class Item:
    def __init__(self, name, weight, value):
        self.name = name
        self.weight = weight
        self.value = value

def knapsack_backtracking(items, capacity):
    def backtrack(index, current_weight, current_value, selected_items):
        nonlocal max_value, best_selection

        if current_weight <= capacity and current_value > max_value:
            max_value = current_value
            best_selection = selected_items[:]

        if index == len(items):
            return

        # Include the current item
        selected_items.append(items[index])
        backtrack(index + 1, current_weight + items[index].weight, current_value + items[index].value, selected_items)
        selected_items.pop()

        # Exclude the current item
        backtrack(index + 1, current_weight, current_value, selected_items)

    max_value = 0
    best_selection = []

    backtrack(0, 0, 0, [])

    return best_selection, max_value

# List of available items
items = [
    Item("Tenda", 4, 8),
    Item("Pakaian Hangat", 3, 5),
    Item("Perlengkapan Masak", 2, 6),
    Item("Peta Topografi", 1, 3),
    Item("Headlamp", 1, 4)
]

# Knapsack capacity
knapsack_capacity = 8

# Solve the knapsack problem using backtracking
selected_items, max_value = knapsack_backtracking(items, knapsack_capacity)

# Display the results
print("Selected Items:")
for item in selected_items:
    print(f"{item.name} - Weight: {item.weight} kg, Value: {item.value}")

print(f"\nMaximum Value: {max_value}")
