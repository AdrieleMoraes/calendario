(function(win,doc){
    'use strict';

    let calendarEl=doc.querySelector('.calendar');
    let calendar = new FullCalendar.Calendar(calendarEl,{
        initialView: 'dayGridMonth',
        headerToolbar:{            
                start: 'prev,next,today', // will normally be on the left. if RTL, will be on the right
                center: 'title',
                end: 'dayGridMonth, timeGridWeek, timeGridDay' // will normally be on the right. if RTL, will be on the left
            },
        buttonText:{
            
                today:    'hoje',
                month:    'mês',
                week:     'semana',
                day:      'dia'            
        },

        locale:'pt-br'        
    });
    calendar.render();

})(window,document);