const express = require('express')
const app = express();
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/layouts', function(error){});

app.use(express.static('public'));
const nombre = 'Iván';
const email = 'john19.imb@gmail.com';
app.get('/', (req, res) => {
    res.render('home',{
        nombre,
        info:'Ingeniero Electrónico,Programador en C,Programador en VHDL,si dios quiere,Programador Web'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        metas:'Mis metas profesionales son ser innovador y tener un potencial aporte en las tecnologías eléctricas-electrónicas y digitales que originen un factor de cambio en la sociedad moderna.',
        profesion:'Ingeniero Eléctrico & Eletrónico.',
        texto1:'Nuestro cerebro entreteje los recuerdos del pasado y los sueños del futuro para crear el sentido de, ¨yo¨.',
        texto2:'Sin embargo, los recuerdos no son registros almacenados de alta fidelidad, más bien son actuaciones en vivo creadas de diferentes partes del cerebro en el momento actual. Es por ello que el tiempo y la memoria embellecen los recuerdos, las malas experiencias parecen buenas y las buenas se idealizan lo que provoca que rememos, como botes contra corriente, en reversa, eternamente hacia el pasado. Pero cabe mencionar que en tanto exista aquel que mantenga en su memoria lo qué fué, también será incapaz de aceptar lo que puede ser.',
        nombre,
        birthday:'19 Feb 1997',
        website:'',
        cell:'+52 551 690 1323',
        city:'Cd. México, México',
        age:'24',
        degree:'Licenciatura',
        email,
        freelance:'Igual que mi estado civil, disponible jeje'
    });
});

app.get('/resume', (req, res) => {
    res.render('resume',{
        nombre,
        text_resume_1:'El sentimiento global y básico, duradero y dominante, de un modo de ser superior y regio respecto de un modo de ser inferior es el origen de la contraposición entre ¨bueno¨ y ¨malo¨.',
        apellido:'Mena',
        sumary:'Estar atravezando una tormenta, no significa que no te dirijas hacia la luz del sol.',
        direccion:'Benito Juárez 34, CDMX',
        tel:'(55)2162-6160',
        email,
        carrera:'Ingeniería en Eléctrica & Eletrónica',
        time_lic:'2015 - actual',
        escuela_lic:'Facultad de Ingeniería, UNAM, CDMX',
        texto_lic:'Lo que te mete en problemas no es lo que no sabes, es lo que estas seguro que sabes, pero simplemente no es así.',
        carrera_bach:'Bachillerato en Ciencia Físico-Matemáticas',
        time_bach:'2012 - 2015',
        escuela_bach:'Escuela Nacional Preparatoria No. 5 “José Vasconcelos”, UNAM, CDMX',
        texto_bach:'Un hombre no puede borrar de su mente la verdad. No puede regresar a la oscuridad y volverse ciego una vez que se le concede el don de ver.',

        servicio:'Asistente de profesorado universitario',
        time_ss:'Febrero 2018 - Agosto 2018',
        lugar_ss:'Facultad de Ingeniería, UNAM',
        exp_ss_1:'Recopilación de información para la elaboración de un libro centrado en el curso de Física de Semiconductores.',
        exp_ss_2:'Adaptación de tesis de posgrado y licenciatura en artículos de revistas científicas.',
        exp_ss_3:'Participación en el diseño y elaboración de prácticas con simulación por software del curso de Física de Semiconductores.',

        exp_gen:'Asistencia en proyectos',
        time_gen:'2015 - actual',
        exp_gen_1:'Desarroyo de un software que calculaba las fuerzas eléctricas vectoriales de dos o tres cargas con simulación en 3D',
        exp_gen_2:'Desarrollo del software y hardware de un aplicación móvil que programa un reloj (RTC) por medio de protocolos de comunicación bluetooh, UART, I2C para su despliegue en cuatro displays siete segmentos',
        exp_gen_3:'Asistencia en el desarrollo del software y hardware del desarrollo de un brazo mecánico con dos movimientos y automatizado',
        exp_gen_4:'Asistencia en el diseño, desarrollo, simulación e implementación de un mezclador de señales de audio con capacidad para 6 señales de entrada.'

    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio',{
        nombre
    });
});

app.get('/services', (req, res) => {
    res.render('services',{
        nombre
    });
});


app.listen(3000,()=>{
    console.log('Servidor en línea.')
});