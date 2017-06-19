import { Injectable } from '@angular/core';

import { Event } from '../model/event';

const EVENTS: Event[] = [
    {
        id: 1,
        name: "Somertime",
        description: "something",
        image: "https://yandex.ru/images/today?size=1920x1080",
        link: "https://angular.io/guide/pipes",
        startDate: new Date("February 4, 2016 10:13:00"),
        endDate: new Date("February 4, 2016 10:13:00"),
        place: {
          id: 0,
          title: 'Garage',
          latitude: 59.21806649999999,
          longitude: 39.8978052
        }
    },
    {
        id: 2,
        name: "Drinking Booze",
        description: "something",
        image: "https://www.kr-gazeta.ru/upload/medialibrary/934/глинтвейн.jpg",
        link: "https://angular.io/guide/pipes",
        startDate: new Date("February 4, 2016 10:13:00"),
        endDate: new Date("February 4, 2016 10:13:00"),
        place: {
          id: 0,
          title: 'Garage',
          latitude: 59.21806649999999,
          longitude: 39.8978052
        }
    },
    {
        id: 3,
        name: "Вечер в Бардаке",
        description: "Проведи незабываемый вечер",
        image: "http://mtdata.ru/u3/photoF82A/20851185804-0/original.jpg",
        link: "https://angular.io/guide/pipes",
        startDate: new Date("February 4, 2016 10:13:00"),
        endDate: new Date("February 4, 2016 10:13:00"),
        place: {
          id: 0,
          title: 'Garage',
          latitude: 59.21806649999999,
          longitude: 39.8978052
        }
    }
];

@Injectable()
export class EventService {

    getEvents(): Event[] {
        return EVENTS;
    }

    getEvent(id: number): Event {
        return EVENTS.find(event => event.id === id);
    }
}