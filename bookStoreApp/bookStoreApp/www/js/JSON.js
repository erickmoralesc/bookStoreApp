(function(){



	var pedidos = [
		{
			id: '4',
			fecha:'18/02/2014',
			resumen:'Anna Kanenrdsdina (5) / Frankeistein',
			estado:'PAGADO',
			total: '195',	
		},
		{
			id: '5',
			fecha:'22/02/2014',
			resumen:'Juego de tronos (1)',
			estado:'NO PAGADO',
			total: '140',	
		},
		{
			id: '7',
			fecha:'24/02/2014',
			resumen:'Juego de tronos (1)',
			estado:'PAGADO',
			total: '140',	
		},
		{
			id: '2',
			fecha:'16/02/2014',
			resumen:'Juego de tronos (2)',
			estado:'NO PAGADO',
			total: '140',	
		},	
	];

	var app = angular.module('store', [ ]);
	
	app.controller('PedidosController', function(){
		this.products=pedidos;
	});

	
})();
