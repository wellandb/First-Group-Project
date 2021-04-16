from random import *

class parking_map():
    def __init__(self,height,width):
        self.l=[['1' for i in range(width)] for j in range(height)]
        self.width=width
        self.height=height
        for i in range(height):
            for j in range(width):
                if i == 0:
                    self.l[i][j] = "0"
                elif i == 13:
                    self.l[i][j] = "0"
                else:
                    if j == 1:
                        self.l[i][j] = "0"
                    elif j == 4:
                        self.l[i][j] = "0"



    # prints a representation of the car park to the terminal
    def show_map(self):
        for i in range(self.height):
            a=''
            for j in range(self.width):
                b=self.l[i][j]
                if b=='1':
                    a+='unoccupied      '
                elif b=='2':
                    a+='occupied        '
                elif b=='3':
                    a+='may be occupied '
                elif b=='4':
                    a+='exit            '
                elif b=='0':
                    a+='path            '
                else:
                    a+='error           '
            print(a)
            print('\n')

    def checkLocation(self, location):
        j=location[0]
        i=location[1]
        return self.l[i][j]

    def checkFull(self):
        check = True
        for i in range(self.height):
            for j in range(self.width):
                if self.l[i][j] == "1":
                    check = False
        return check



    # takes in a tuple and changes the state of that coordinate of the car park, if no stat given default to 2 or occupied
    def change_state(self,location,state='2'):
        j=location[0]
        i=location[1]
        self.l[i][j]=state

    def pick_location(self,mode='seq'):
        # Pick location for a Park Ez app user
        if mode=='seq':
            for i in range(self.height):
                for j in range(self.width):
                    if self.l[i][j]=='1':
                        print('Location selected: '+str(i)+' '+str(j))
                        self.l[i][j]='3'
                        return True
            # if all locations aren't unoccupied
            return False

        # pick a location for random car not using the Park Ez app
        elif mode=='rand':
            counter=0
            while counter<1000:
                i= randint(0,self.height-1)
                j= randint(0,self.width-1)
                # if random car space is unoccupied set it to may be occupied
                if self.l[i][j]=='1':
                    self.l[i][j]=='3'
                    return True
                counter+=1
            return False
        
        # search mode
        elif mode=='search':
            pass

    # checks locations and if they may be occupied locations and it changes them to occupied
    def ensure_location(self,loc):
        # if no specific location given check all loations
        if loc==[]:
            for i in self.l:
                for j in i:
                    if j=='3':
                        j='2'
                        return None

        # for a specific locations
        else:
            self.l[loc[0]][loc[1]]='2'
            for i in self.l:
                for j in i:
                    if j=='3':
                        j='1'
                        return None

    # start of dijkstra's algorithm    
    def find_closest_node(self,start_loc):
        map=self.l
        fetch_list=[]
        distance_list=[]
        x=start_loc[0]
        y=start_loc[1]
        for i in range(map):
            for j in range(map[i]):
                if map[i][j]=='1':
                    fetch_list+=[i,j]
        for n in fetch_list:
            distance_list+=(abs(n[0]-x)+abs(n[1]-y))
        end_loc=fetch_list[distance_list.index(min(distance_list))]
        def dijkstra(start_loc,end_loc):
            way=[]
            return way
        return dijkstra(start_loc,end_loc)
