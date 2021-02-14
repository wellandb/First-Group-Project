from random import *

class parking_map():
    def __init__(self,height,width):
        self.l=[['1' for i in range(width)] for j in range(height)]
        self.width=width
        self.height=height
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
                else:
                    a+='error           '
            print(a)
            print('\n')
    def change_state(self,location,state='2'):
        j=location[0]
        i=location[1]
        self.l[i][j]=state
    def pick_location(self,mode='seq'):
        if mode=='seq':
            for i in range(self.height):
                for j in range(self.width):
                    if self.l[i][j]=='1':
                        print('Location selected: '+str(i)+' '+str(j))
                        self.l[i][j]='3'
                        return True
            return False
        elif mode=='rand':
            counter=0
            while counter<1000:
                i=randint(0,self.height-1)
                j=randint(0,self.width-1)
                if self.l[i][j]=='1':
                    self.l[i][j]=='3'
                    return True
                counter+=1
            return False
        elif mode=='search':
            pass
    def ensure_location(self,loc):
        if loc==[]:
            for i in self.l:
                for j in i:
                    if j=='3':
                        j=='2'
                        return None
        else:
            self.l[loc[0]][loc[1]]='2'
            for i in self.l:
                for j in i:
                    if j=='3':
                        j=='1'
                        return None

a=parking_map(10,10)
a.show_map()
a.change_state((1,2),'2')
a.pick_location('seq')
a.show_map()
#a normal sequence:pick map, then ensure location, then again
