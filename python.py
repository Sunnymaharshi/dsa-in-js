# Class

class Person:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def getName(self):
        return self.name
    
    def setAge(self,age):
        self.age = age

p1 = Person("John",20)
print(p1.name)