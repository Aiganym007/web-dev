from models import Animal, Dog, Cat
def main():
    animal1 = Animal("Generic Animal", 5, "Gray")
    dog1 = Dog("Buddy", 3, "Brown", "Labrador")
    cat1 = Cat("Misty", 2, "White", True)

    animals = [animal1, dog1, cat1]
    for a in animals:
        print(a)         
        print(a.voice())  
        print(a.info())
        print()

    if isinstance(a, Cat):
        print("Mouse caught:", a.mouseCaught)
    elif isinstance(a, Dog):
        print("Breed:", a.breed)