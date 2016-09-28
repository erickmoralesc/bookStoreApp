(function(){


	var books = [
		{
			
			titulo: 'Rayuela',
			autor:'Julio Cortázar',
			editorial:'Editorial Sudamericana',
			descripcion:'Rayuela es una novela del escritor argentino Julio Cortázar. Escrita en París y publicada por primera vez el 28 de junio de 1963,1 constituye una de las obras centrales del boom latinoamericano. Narra la historia de Horacio Oliveira, su protagonista, pone en juego la subjetividad del lector y tiene múltiples finales. A esta obra suele llamársela «antinovela», aunque el mismo Cortázar prefería denominarla «contranovela». Si bien el estilo que se mantiene a lo largo de la obra es muy variado, se la considera una de las primeras obras surrealistas de la literatura argentina. «De alguna manera es la experiencia de toda una vida y la tentativa de llevarla a la escritura», dijo Cortázar cuando le preguntaron qué significaba Rayuela para él.',
			img: 'img/rayuelaimg.png',
				
			
			
		},
		{
		
			titulo: 'De Noche Vienes',
			autor:'Elena Poniatowska',
			editorial:'Ediciones Era',
			descripcion:' De noche vienes es un libro escrito con la fina sensibilidad de Elena Poniatowska,, donde el tema principal es el papel que desempeña la mujer para sí misma y para los demás.Una compilación de 18 cuentos que giran entorno al sexo femenino en sus diversas manifestaciones psicológicas, sociales y económicas.Cuentos que parecen estar narrados cada uno por una mujer diferente, en donde mezcla tanto el humor como la desgracia. Así por ejemplo, en su cuento Love Strory, relata una relación de labores domésticas en la que resalta la soledad e inclinación afectuosa y obsesiva de la "señora" de la casa con su sirvienta; o bien, está el cuento El limbo, en el que el refinamiento se encuentra con la crudeza de lo vulgar, donde narra la triste realidad que encierran las clases sociales y el afecto maternal.Resulta agradable la forma tan precisa en la que Elena Poniatowska hace de una acción trivial, el centro de su tema, y darle la importancia que ella decide; como lo realiza al describir en su cuento La casita de sololoi lo que es para una niña el cepillar su cabello enredado por una madre cansada y enfurecida.Historias de amor, pasión, dinero y pobreza, y de vida hogareña no siempre feliz, hacen de este libro un excelente medio de recreación y reflexión.',
			img:'img/denochevienesimg.png',
				
		},
		{	

			titulo: 'El Amante Japonés',
			autor:'Isabel Allendee',
			editorial:'Plaza & Janes',
			descripcion:'La historia de amor entre la joven Alma Belasco y el jardinero japonés Ichimei conduce al lector por un recorrido a través de diversos escenarios que van desde la Polonia de la Segunda Guerra Mundial hasta el San Francisco de nuestros días «A los veintidós años, sospechando que tenían el tiempo contado, Ichimei y Alma se atragantaron de amor para consumirlo entero, pero mientras más intentaban agotarlo, más imprudente era el deseo, y quien diga que todo fuego se apaga solo tarde o temprano, se equivoca: hay pasiones que son incendios hasta que las ahoga el destino de un zarpazo y aun así quedan brasas calientes listas para arder apenas se les da oxígeno.»',
			img:'img/elamantejaponesimg.png',
				
			
		}	
	];

	var app = angular.module('bookStoreApp', ['store-books']);

	app.controller('StoreController', function(){
		this.products = books;
	});

	
	var dash = angular.module('dashBoard',[]);

})();
