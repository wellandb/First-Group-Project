import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/csimage/GitRepos/first_group_project/database/private_key.json')
firebase_admin.initialize_app(cred, {
  'projectId': "park-ez-36240"
})

db = firestore.client()

doc_ref = db.collection(u'userData').document(u'janedoe')
obj = {
    "email": "janedoe@janedoe.janedoe",
    "first_name": "Jane",
    "last_name": "Doe",
    "plate_number": "XXXXXXX",
    "disability_info": "0"
}
doc_ref.set(obj)

doc_ref.set({
    u'email': u'janedoe@janedoe.janedoe',
    u'first_name': u'Jane',
    u'last_name': u'Doe',
    u'plate_number': u'XXXXXXX',
    u'disability_info': u'0'
})

doc_ref = db.collection(u'userData').document(u'janedoe')
doc_ref.set({
    u'email': u'janedoe@janedoe.janedoe',
    u'first_name': u'Jane',
    u'last_name': u'Doe',
    u'plate_number': u'XXXXXXX',
    u'disability_info': u'0'
})

doc_ref = db.collection(u'userTicket').document(u'exampleTicket')
doc_ref.set({
    u'userId': u'janedoe',
    u'parking_location': u'XX',
    u'start_time': u'00:00',
    u'end_time': u'00:00',
    u'price': u'5'
})

doc_ref = db.collection(u'carParkSpaces').document(u'carParkA')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'D'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'C'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': u'E'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'C':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'D'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'C'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'D':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'D'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'E'
        }

    },

    u'F':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'D'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'F'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'C'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    }

})

doc_ref = db.collection(u'carParkSpaces').document(u'carParkB')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'C'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': u'E'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'C':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'C'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'D':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'E'
        }

    },

    u'F':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'F'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'C'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    }

})

doc_ref = db.collection(u'carParkSpaces').document(u'carParkC')
doc_ref.set({
    u'A':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'C'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'B':
    {
        u'1':
        {
            u'symbol': u'E'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'C':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'C'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'D':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'C'
        },

         u'6':
        {
            u'symbol': u'F'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'C'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'F'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
        }

    },

    u'E':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'.'
        },

        u'4':
        {
            u'symbol': u'.'
        },

        u'5':
        {
            u'symbol': u'.'
        },

        u'6':
        {
            u'symbol': u'.'
        },

        u'7':
        {
            u'symbol': u'.'
        },

        u'8':
        {
            u'symbol': u'.'
        },

        u'9':
        {
            u'symbol': u'.'
        },

        u'10':
        {
            u'symbol': u'.'
        },

        u'11':
        {
            u'symbol': u'.'
        },

        u'12':
        {
            u'symbol': u'.'
        },

        u'13':
        {
            u'symbol': u'.'
        },

        u'14':
        {
            u'symbol': u'.'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'E'
        }

    },

    u'F':
    {
        u'1':
        {
            u'symbol': u'-'
        },

        u'2':
        {
            u'symbol': u'.'
        },

        u'3':
        {
            u'symbol': u'C'
        },

         u'4':
        {
            u'symbol': u'C'
        },

         u'5':
        {
            u'symbol': u'F'
        },

         u'6':
        {
            u'symbol': u'C'
        },

         u'7':
        {
            u'symbol': u'F'
        },

         u'8':
        {
            u'symbol': u'F'
        },

         u'9':
        {
            u'symbol': u'F'
        },

         u'10':
        {
            u'symbol': u'F'
        },

         u'11':
        {
            u'symbol': u'F'
        },

         u'12':
        {
            u'symbol': u'F'
        },

         u'13':
        {
            u'symbol': u'C'
        },

         u'14':
        {
            u'symbol': u'F'
        },

         u'15':
        {
            u'symbol': u'.'
        },

         u'16':
        {
            u'symbol': u'-'
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
