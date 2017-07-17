"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryStoreService = (function () {
    function InMemoryStoreService() {
    }
    /**
    * Creates fresh copy of data each time.
    * Safe for consuming service to morph arrays and objects.
    */
    InMemoryStoreService.prototype.createDb = function () {
        var speakers = [
            {
                'id': 11,
                'name': 'Chewbacca',
                'twitter': '@im_chewy'
            },
            {
                'id': 12,
                'name': 'Rey',
                'twitter': '@rey'
            },
            {
                'id': 13,
                'name': 'Finn (FN2187)',
                'twitter': '@finn'
            },
            {
                'id': 14,
                'name': 'Han Solo',
                'twitter': '@i_know'
            },
            {
                'id': 15,
                'name': 'Leia Organa',
                'twitter': '@organa'
            },
            {
                'id': 16,
                'name': 'Luke Skywalker',
                'twitter': '@chosen_one_son'
            },
            {
                'id': 17,
                'name': 'Poe Dameron',
                'twitter': '@i_am_poe'
            },
            {
                'id': 18,
                'name': 'Kylo Ren',
                'twitter': '@daddy_issues'
            },
            {
                'id': 19,
                'name': 'Supreme Commander Snoke',
                'twitter': '@snoker'
            },
            {
                'id': 20,
                'name': 'R2-D2',
                'twitter': '@r2d2'
            },
            {
                'id': 21,
                'name': 'BB8',
                'twitter': '@bb_eight'
            },
            {
                'id': 22,
                'name': 'C-3PO',
                'twitter': '@goldy'
            },
            {
                'id': 23,
                'name': 'Maz Kanata',
                'twitter': '@mazzzy'
            },
            {
                'id': 24,
                'name': 'Captain Phasma',
                'twitter': '@fazma'
            },
            {
                'id': 25,
                'name': 'General Hux',
                'twitter': '@hux'
            },
            {
                'id': 26,
                'name': 'Lor San Tekka',
                'twitter': '@lor_san'
            }
        ];
        var sessions = [
            {
                'id': 130,
                'name': 'Angular 2 First Look',
                'level': 'beginner'
            },
            {
                'id': 132,
                'name': 'RxJS',
                'level': 'beginner'
            },
            {
                'id': 133,
                'name': 'Angular Material',
                'level': 'beginner'
            },
            {
                'id': 134,
                'name': 'Redux',
                'level': 'beginner'
            },
            {
                'id': 135,
                'name': 'React',
                'level': 'beginner'
            },
            {
                'id': 136,
                'name': 'TypeScript',
                'level': 'beginner'
            },
            {
                'id': 137,
                'name': 'ES2015',
                'level': 'beginner'
            },
            {
                'id': 138,
                'name': 'Mongo',
                'level': 'beginner'
            },
            {
                'id': 139,
                'name': 'Redis',
                'level': 'beginner'
            },
            {
                'id': 140,
                'name': 'Node',
                'level': 'beginner'
            },
            {
                'id': 141,
                'name': 'Express',
                'level': 'beginner'
            }
        ];
        var rooms = [
            {
                'id': 30,
                'name': 'Millennium Falcon',
                'type': 'space'
            },
            {
                'id': 32,
                'name': 'X-Wing Fighter',
                'type': 'space'
            },
            {
                'id': 33,
                'name': 'Imperial Star Destroyer',
                'type': 'space'
            },
            {
                'id': 34,
                'name': 'AT-AT Walker',
                'type': 'land'
            },
            {
                'id': 35,
                'name': 'TIE Fighter',
                'type': 'space'
            },
            {
                'id': 36,
                'name': 'B-Wing Fighter',
                'type': 'space'
            },
            {
                'id': 37,
                'name': 'ETA-2 Jedi Starfighter',
                'type': 'space'
            },
            {
                'id': 38,
                'name': 'TIE Interceptor',
                'type': 'space'
            },
            {
                'id': 39,
                'name': 'X-34 Landspeeder',
                'type': 'land'
            },
            {
                'id': 40,
                'name': 'Snow Speeder',
                'type': 'land'
            },
            {
                'id': 41,
                'name': 'X-34 Landspeeder',
                'type': 'land'
            }
        ];
        return { rooms: rooms, speakers: speakers, sessions: sessions };
    };
    return InMemoryStoreService;
}());
exports.InMemoryStoreService = InMemoryStoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbi1tZW1vcnktc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUErTUEsQ0FBQztJQTlNQzs7O01BR0U7SUFDRix1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxRQUFRLEdBQUc7WUFDYjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsV0FBVztnQkFDbkIsU0FBUyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsS0FBSztnQkFDYixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixTQUFTLEVBQUUsT0FBTzthQUNuQjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixTQUFTLEVBQUUsU0FBUzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxhQUFhO2dCQUNyQixTQUFTLEVBQUUsU0FBUzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLFNBQVMsRUFBRSxpQkFBaUI7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsYUFBYTtnQkFDckIsU0FBUyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsVUFBVTtnQkFDbEIsU0FBUyxFQUFFLGVBQWU7YUFDM0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUseUJBQXlCO2dCQUNqQyxTQUFTLEVBQUUsU0FBUzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFB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TUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsTUFBTSxFQUFFLE9BQU87YUFDaEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxNQUFNLEVBQUUsT0FBTzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLE1BQU0sRUFBRSxPQUFPO2FBQ2hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsTUFBTSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixNQUFNLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsTUFBTSxFQUFFLE1BQU07YUFDZjtTQUNGLENBQUM7UUFFRixNQUFNLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEvTUQsSUErTUM7QUEvTVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RvcmVTZXJ2aWNlIHtcbiAgLyoqXG4gICogQ3JlYXRlcyBmcmVzaCBjb3B5IG9mIGRhdGEgZWFjaCB0aW1lLlxuICAqIFNhZmUgZm9yIGNvbnN1bWluZyBzZXJ2aWNlIHRvIG1vcnBoIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAgKi9cbiAgY3JlYXRlRGIoKSB7XG4gICAgbGV0IHNwZWFrZXJzID0gW1xuICAgICAge1xuICAgICAgICAnaWQnOiAxMSxcbiAgICAgICAgJ25hbWUnOiAnQ2hld2JhY2NhJyxcbiAgICAgICAgJ3R3aXR0ZXInOiAnQGltX2NoZXd5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMTIsXG4gICAgICAgICduYW1lJzogJ1JleScsXG4gICAgICAgICd0d2l0dGVyJzogJ0ByZXknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxMyxcbiAgICAgICAgJ25hbWUnOiAnRmlubiAoRk4yMTg3KScsXG4gICAgICAgICd0d2l0dGVyJzogJ0BmaW5uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMTQsXG4gICAgICAgICduYW1lJzogJ0hhbiBTb2xvJyxcbiAgICAgICAgJ3R3aXR0ZXInOiAnQGlfa25vdydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDE1LFxuICAgICAgICAnbmFtZSc6ICdMZWlhIE9yZ2FuYScsXG4gICAgICAgICd0d2l0dGVyJzogJ0BvcmdhbmEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxNixcbiAgICAgICAgJ25hbWUnOiAnTHVrZSBTa3l3YWxrZXInLFxuICAgICAgICAndHdpdHRlcic6ICdAY2hvc2VuX29uZV9zb24nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxNyxcbiAgICAgICAgJ25hbWUnOiAnUG9lIERhbWVyb24nLFxuICAgICAgICAndHdpdHRlcic6ICdAaV9hbV9wb2UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxOCxcbiAgICAgICAgJ25hbWUnOiAnS3lsbyBSZW4nLFxuICAgICAgICAndHdpdHRlcic6ICdAZGFkZHlfaXNzdWVzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMTksXG4gICAgICAgICduYW1lJzogJ1N1cHJlbWUgQ29tbWFuZGVyIFNub2tlJyxcbiAgICAgICAgJ3R3aXR0ZXInOiAnQHNub2tlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDIwLFxuICAgICAgICAnbmFtZSc6ICdSMi1EMicsXG4gICAgICAgICd0d2l0dGVyJzogJ0ByMmQyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMjEsXG4gICAgICAgICduYW1lJzogJ0JCOCcsXG4gICAgICAgICd0d2l0dGVyJzogJ0BiYl9laWdodCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDIyLFxuICAgICAgICAnbmFtZSc6ICdDLTNQTycsXG4gICAgICAgICd0d2l0dGVyJzogJ0Bnb2xkeSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDIzLFxuICAgICAgICAnbmFtZSc6ICdNYXogS2FuYXRhJyxcbiAgICAgICAgJ3R3aXR0ZXInOiAnQG1henp6eSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDI0LFxuICAgICAgICAnbmFtZSc6ICdDYXB0YWluIFBoYXNtYScsXG4gICAgICAgICd0d2l0dGVyJzogJ0BmYXptYSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDI1LFxuICAgICAgICAnbmFtZSc6ICdHZW5lcmFsIEh1eCcsXG4gICAgICAgICd0d2l0dGVyJzogJ0BodXgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAyNixcbiAgICAgICAgJ25hbWUnOiAnTG9yIFNhbiBUZWtrYScsXG4gICAgICAgICd0d2l0dGVyJzogJ0Bsb3Jfc2FuJ1xuICAgICAgfVxuICAgIF07XG5cbiAgICBsZXQgc2Vzc2lvbnMgPSBbXG4gICAgICB7XG4gICAgICAgICdpZCc6IDEzMCxcbiAgICAgICAgJ25hbWUnOiAnQW5ndWxhciAyIEZpcnN0IExvb2snLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxMzIsXG4gICAgICAgICduYW1lJzogJ1J4SlMnLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxMzMsXG4gICAgICAgICduYW1lJzogJ0FuZ3VsYXIgTWF0ZXJpYWwnLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxMzQsXG4gICAgICAgICduYW1lJzogJ1JlZHV4JyxcbiAgICAgICAgJ2xldmVsJzogJ2JlZ2lubmVyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMTM1LFxuICAgICAgICAnbmFtZSc6ICdSZWFjdCcsXG4gICAgICAgICdsZXZlbCc6ICdiZWdpbm5lcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDEzNixcbiAgICAgICAgJ25hbWUnOiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICdsZXZlbCc6ICdiZWdpbm5lcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDEzNyxcbiAgICAgICAgJ25hbWUnOiAnRVMyMDE1JyxcbiAgICAgICAgJ2xldmVsJzogJ2JlZ2lubmVyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMTM4LFxuICAgICAgICAnbmFtZSc6ICdNb25nbycsXG4gICAgICAgICdsZXZlbCc6ICdiZWdpbm5lcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDEzOSxcbiAgICAgICAgJ25hbWUnOiAnUmVkaXMnLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxNDAsXG4gICAgICAgICduYW1lJzogJ05vZGUnLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAxNDEsXG4gICAgICAgICduYW1lJzogJ0V4cHJlc3MnLFxuICAgICAgICAnbGV2ZWwnOiAnYmVnaW5uZXInXG4gICAgICB9XG4gICAgXTtcblxuICAgIGxldCByb29tcyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMzAsXG4gICAgICAgICduYW1lJzogJ01pbGxlbm5pdW0gRmFsY29uJyxcbiAgICAgICAgJ3R5cGUnOiAnc3BhY2UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAzMixcbiAgICAgICAgJ25hbWUnOiAnWC1XaW5nIEZpZ2h0ZXInLFxuICAgICAgICAndHlwZSc6ICdzcGFjZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDMzLFxuICAgICAgICAnbmFtZSc6ICdJbXBlcmlhbCBTdGFyIERlc3Ryb3llcicsXG4gICAgICAgICd0eXBlJzogJ3NwYWNlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMzQsXG4gICAgICAgICduYW1lJzogJ0FULUFUIFdhbGtlcicsXG4gICAgICAgICd0eXBlJzogJ2xhbmQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWQnOiAzNSxcbiAgICAgICAgJ25hbWUnOiAnVElFIEZpZ2h0ZXInLFxuICAgICAgICAndHlwZSc6ICdzcGFjZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDM2LFxuICAgICAgICAnbmFtZSc6ICdCLVdpbmcgRmlnaHRlcicsXG4gICAgICAgICd0eXBlJzogJ3NwYWNlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogMzcsXG4gICAgICAgICduYW1lJzogJ0VUQS0yIEplZGkgU3RhcmZpZ2h0ZXInLFxuICAgICAgICAndHlwZSc6ICdzcGFjZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDM4LFxuICAgICAgICAnbmFtZSc6ICdUSUUgSW50ZXJjZXB0b3InLFxuICAgICAgICAndHlwZSc6ICdzcGFjZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDM5LFxuICAgICAgICAnbmFtZSc6ICdYLTM0IExhbmRzcGVlZGVyJyxcbiAgICAgICAgJ3R5cGUnOiAnbGFuZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZCc6IDQwLFxuICAgICAgICAnbmFtZSc6ICdTbm93IFNwZWVkZXInLFxuICAgICAgICAndHlwZSc6ICdsYW5kJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkJzogNDEsXG4gICAgICAgICduYW1lJzogJ1gtMzQgTGFuZHNwZWVkZXInLFxuICAgICAgICAndHlwZSc6ICdsYW5kJ1xuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4geyByb29tcywgc3BlYWtlcnMsIHNlc3Npb25zIH07XG4gIH1cbn1cbiJdfQ==