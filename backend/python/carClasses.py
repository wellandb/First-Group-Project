import pygame, random
# initialise pygame
pygame.init()

# initial parent car class
class car():
    def __init__(self):
    
        self.image = pygame.image.load("carImage.png")

    def move(self):
         # movement method for moving the car to parking spot
        pass

# car using the park me app
class parkEzCar(car):
    def __init__(self):
        super().__init__()
        # This will be a different image when i edit the image to be a park ez car
        #self.image = "parkEzCar.png"


# car not using the park me app
class randomCar(car):
    def __init__(self):
        super().__init__()

    def generateRandomSpot(self,window, array, taken):
        # make a randome car Park spot based on how we implement the car park storage
        x = random.randint(0,3)
        y = random.randint(0,11)
        window.blit(pygame.transform.rotate(pygame.transform.scale(self.image, (70,70)), 90), array[x][y])
        taken[x][y] = 'occupied'
        

