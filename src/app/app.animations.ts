import { trigger, animate, transition, style, group, query} from '@angular/animations'

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100%', zIndex: 2}), {optional: true}),
        group([
            query(':enter', [
                style({ opacity: '0%'}),
                animate('0.5s ease-out', style({ opacity: '100%'}))
            ], {optional: true}),
            query(':leave', [
                style({ opacity: '100%'}),
                animate('0.5s ease-out', style({ opacity: '0%'}))
            ], {optional: true})
        ])
    ])
])