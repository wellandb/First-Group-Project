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
carPark = [['' for i in range(12)] for j in range(4)]


for i in range(12):
    for j in range(4):
        if j == 0:
            carPark[j][i] = (15, 70+(35*i))
        elif j == 1:
            carPark[j][i] = (180, 70+(35*i))
        elif j == 2:
            carPark[j][i] = (250, 70+(35*i))
        elif j == 3:
            carPark[j][i] = (410, 70+(35*i))

# Car park taken spots
carParkTaken = [['' for i in range(12)] for j in range(4)]


# Car test
car1 = randomCar()
car1.generateRandomSpot(win, carPark, carParkTaken)


# setting up clock
clock = pygame.time.Clock()

run = True
while run:

    clock.tick(20)

    #event loop
    for event in pygame.event.get():
        # bomb out of loop if quit
        if event.type == pygame.QUIT:
            run = True

    pygame.display.update()
#quit program
pygame.quit()