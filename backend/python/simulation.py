import pygame
# initialise pygame
pygame.init()

#Car classes
from carClasses import *

# intialise some colours
red = (255, 0, 0)
blue = (0, 0, 255)
green = (0, 255, 0)
black = (0,0,0)
white = (255,255,255)


#window
screenWidth = 500
screenHeight = 600
screen = (screenWidth,screenHeight)
win = pygame.display.set_mode(screen)
win.fill(black)

# setting a caption for game window
pygame.display.set_caption('Parking Simulation')


#Car park background
bg = pygame.image.load('carPark.png')
win.blit(pygame.transform.scale(bg, (500,600)),(0,0))

# Car park location array
carPark = [['' for i in range(14)] for j in range(6)]


for i in range(14):
    for j in range(6):
        if i > 0 and i < 13:
            if j == 0:
                carPark[j][i] = (15, 70+(35*(i-1)))
            elif j == 2:
                carPark[j][i] = (180, 70+(35*(i-1)))
            elif j == 3:
                carPark[j][i] = (250, 70+(35*(i-1)))
            elif j == 5:
                carPark[j][i] = (410, 70+(35*(i-1)))
            else:
                carPark[j][i] = (15,70)
        else:
            carPark[j][i] = (15,70)

# Car park taken spots
from map import *
carParkTaken = parking_map(14,6)

# Car test
RandomCars = []
RandomCars.append(randomCar())
RandomCars[0].generateRandomSpot(win, carPark, carParkTaken)


# setting up clock
clock = pygame.time.Clock()

run = True
while run:

    clock.tick(20)

    #event loop
    for event in pygame.event.get():
        # bomb out of loop if quit
        if event.type == pygame.QUIT:
            run = False
    keys = pygame.key.get_pressed()

    if keys[pygame.K_SPACE]:
        RandomCars.append(randomCar())
        RandomCars[-1].generateRandomSpot(win, carPark, carParkTaken)

    pygame.display.update()

pygame.image.save(win, "screenshot.jpeg")
#quit program
pygame.quit()