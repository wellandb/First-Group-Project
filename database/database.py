import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
# Fetch the service account key JSON file contents
cred = credentials.Certificate(
    'private_key.json')
firebase_admin.initialize_app(cred, {
    'projectId': "park-ez-36240"
})


db = firestore.client()
gridEncoding = {
    "freeNormal": "F",
    "freeDisabled": "D",

    "takenNormal": "C",
    "takenDisabled": "G",

    "entrance": "E",
    "exit": "X",

    "road": ".",
    "border": "#",

    "targetSlot": "T"
}
doc_ref = db.collection(u'gridEncoding').document(
    u'gridEncodingDoc').set(gridEncoding)


colKeys = ['A', 'B', 'C', 'D', 'E', 'F']

rowKeys = []
for i in range(1, 17):
    rowKeys.append(str(i))


doc_ref = db.collection(u'carParkSpaces').document(u'carParkA')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["freeDisabled"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': gridEncoding["entrance"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["takenNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["freeDisabled"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["freeDisabled"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["freeDisabled"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["exit"]
        }

    },

    gridEncoding["freeNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["freeDisabled"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    }

})

doc_ref = db.collection(u'carParkSpaces').document(u'carParkB')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': gridEncoding["entrance"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["takenNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["freeDisabled"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["exit"]
        }

    },

    gridEncoding["freeNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    }

})

doc_ref = db.collection(u'carParkSpaces').document(u'carParkC')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': gridEncoding["entrance"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["takenNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    gridEncoding["freeDisabled"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["road"]
        },

        u'4':
        {
            u'symbol': gridEncoding["road"]
        },

        u'5':
        {
            u'symbol': gridEncoding["road"]
        },

        u'6':
        {
            u'symbol': gridEncoding["road"]
        },

        u'7':
        {
            u'symbol': gridEncoding["road"]
        },

        u'8':
        {
            u'symbol': gridEncoding["road"]
        },

        u'9':
        {
            u'symbol': gridEncoding["road"]
        },

        u'10':
        {
            u'symbol': gridEncoding["road"]
        },

        u'11':
        {
            u'symbol': gridEncoding["road"]
        },

        u'12':
        {
            u'symbol': gridEncoding["road"]
        },

        u'13':
        {
            u'symbol': gridEncoding["road"]
        },

        u'14':
        {
            u'symbol': gridEncoding["road"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["exit"]
        }

    },

    gridEncoding["freeNormal"]:
    {
        u'1':
        {
            u'symbol': gridEncoding["border"]
        },

        u'2':
        {
            u'symbol': gridEncoding["road"]
        },

        u'3':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'4':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'5':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'6':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'7':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'8':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'9':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'10':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'11':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'12':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'13':
        {
            u'symbol': gridEncoding["takenNormal"]
        },

        u'14':
        {
            u'symbol': gridEncoding["freeNormal"]
        },

        u'15':
        {
            u'symbol': gridEncoding["road"]
        },

        u'16':
        {
            u'symbol': gridEncoding["border"]
        }

    }

})


doc_ref = db.collection(u'carParkData').document(u'exampleCarPark(A)')
doc_ref.set({
    u'name': u'A',
    u'location': u'xxxxx',
    u'parking_entrance': u'xxxxxxx',
    u'parking_exit': u'xxxxxxx',
    u'mall_entrance': u'xxxxxxx',
    u'mall_exit': u'xxxxxxx',
    u'total_spaces': u'100',
    u'disability_spaces': u'7',
    u'taken_spaces': u'0'
})

doc_ref = db.collection(u'prices').document(u'examplePrices')
doc_ref.set({
    u'carparkName': u'XXX',
    u'0.5': u'4.99',
    u'1': u'5.99',
    u'2': u'6.99',
    u'3': u'8.99',
    u'4': u'9.99',
    u'5': u'100',

})
