const todosLosArmazones = [
    // --- LENTES DE SOL ---
    { archivo: "1000091458.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000091459.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000091460.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000091462.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000091463.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122561.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122564.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122565.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122566.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122567.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122568.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000122569.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181840.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181841.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181842.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181843.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181844.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181845.jpg.jpeg", tipo: "sol", material: "metal" },
    { archivo: "1000181846.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181847.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181848.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181849.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181850.jpg.jpeg", tipo: "sol", material: "metal" },
    { archivo: "1000181852.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181853.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181854.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181855.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181856.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181857.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181860.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181861.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181864.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181865.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181866.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181867.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181868.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181869.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181870.jpg.jpeg", tipo: "sol", material: "combinado" },
    { archivo: "1000181871.jpg.jpeg", tipo: "sol", material: "combinado" },
    { archivo: "1000181872.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181873.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181874.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181875.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181876.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181969.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181970.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181971.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181975.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181976.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181977.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181978.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181979.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181980.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181986.jpg.jpeg", tipo: "sol", material: "metal" },
    { archivo: "1000181987.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181988.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181989.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181990.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: "1000181991.jpg.jpeg", tipo: "sol", material: "acetato" },
    { archivo: '20251119_155557.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155613.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155625.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155645.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155711.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155744.jpg', tipo: 'sol', material: 'acetato' },
    { archivo: '20251119_155750.jpg', tipo: 'sol', material: 'acetato' },

    // --- LENTES DE RECETA (CORREGIDO POSICIÓN 1 A 1 EN VISOR) ---
    { archivo: 'Armazon 61.jpg', tipo: 'receta', material: 'acetato' }, // Pos 2
    { archivo: 'Armazon 62.jpg', tipo: 'receta', material: 'acetato' }, // Pos 3
    { archivo: 'Armazon 64.jpg', tipo: 'receta', material: 'acetato' }, // Pos 5
    { archivo: 'Armazon 65.jpg', tipo: 'receta', material: 'acetato' }, // Pos 6
    { archivo: 'Armazon 70.jpg', tipo: 'receta', material: 'acetato' }, // Pos 11
    { archivo: 'Armazon 71.jpg', tipo: 'receta', material: 'acetato' }, // Pos 12
    { archivo: 'Armazon 72.jpg', tipo: 'receta', material: 'acetato' }, // Pos 13
    { archivo: 'Armazon 75.jpg', tipo: 'receta', material: 'acetato' }, // Pos 15
    { archivo: 'Armazon 77.jpg', tipo: 'receta', material: 'acetato' }, // Pos 17
    { archivo: 'Armazon 78.jpg', tipo: 'receta', material: 'acetato' }, // Pos 18
    { archivo: 'Armazon 79.jpg', tipo: 'receta', material: 'acetato' }, // Pos 19
    { archivo: 'Armazon 80.jpg', tipo: 'receta', material: 'acetato' }, // Pos 20
    { archivo: 'Armazon 81.jpg', tipo: 'receta', material: 'acetato' }, // Pos 21
    { archivo: 'Armazon 82.jpg', tipo: 'receta', material: 'acetato' }, // Pos 22
    { archivo: 'Armazon 83.jpg', tipo: 'receta', material: 'acetato' }, // Pos 23
    { archivo: 'Armazon 84.jpg', tipo: 'receta', material: 'acetato' }, // Pos 24
    { archivo: 'Armazon 85.jpg', tipo: 'receta', material: 'acetato' }, // Pos 25
    { archivo: '20250724_153415.jpg', tipo: 'receta', material: 'acetato' }, // Pos 26
    { archivo: '20250724_153429.jpg', tipo: 'receta', material: 'acetato' }, // Pos 27
    { archivo: '20250724_153510.jpg', tipo: 'receta', material: 'acetato' }, // Pos 28
    { archivo: '20250724_153536.jpg', tipo: 'receta', material: 'acetato' }, // Pos 29
    { archivo: '20250724_153600.jpg', tipo: 'receta', material: 'acetato' }, // Pos 30
    { archivo: '20250724_153610.jpg', tipo: 'receta', material: 'acetato' }, // Pos 31
    { archivo: '20250820_161210.jpg', tipo: 'receta', material: 'acetato' }, // Pos 32
    { archivo: '20250820_161222.jpg', tipo: 'receta', material: 'acetato' }, // Pos 36
    { archivo: '20251020_103040.jpg', tipo: 'receta', material: 'acetato' }, // Pos 38
    { archivo: '20251020_103046.jpg', tipo: 'receta', material: 'acetato' }, // Pos 39
    { archivo: '20251020_103052.jpg', tipo: 'receta', material: 'acetato' }, // Pos 42
    { archivo: '20260218_141733.jpg', tipo: 'receta', material: 'acetato' }, // Pos 44
    { archivo: '20260218_141855.jpg', tipo: 'receta', material: 'acetato' }, // Pos 45
    { archivo: '20260619_104426.jpg', tipo: 'receta', material: 'acetato' }, // Pos 47
    { archivo: '20260714_153454.jpg', tipo: 'receta', material: 'acetato' }, // Pos 48
    { archivo: '20260714_153504.jpg', tipo: 'receta', material: 'acetato' }, // Pos 49
    { archivo: '20260714_153512.jpg', tipo: 'receta', material: 'acetato' }, // Pos 50
    { archivo: '20260714_153521.jpg', tipo: 'receta', material: 'acetato' }, // Pos 51
    { archivo: '20260714_153529.jpg', tipo: 'receta', material: 'acetato' }, // Pos 52
    { archivo: '20260714_153535.jpg', tipo: 'receta', material: 'acetato' }, // Pos 53
    { archivo: '20260805_140148.jpg', tipo: 'receta', material: 'acetato' }, // Pos 54
    { archivo: '20260805_140219.jpg', tipo: 'receta', material: 'acetato' }, // Pos 55
    { archivo: '20260805_140237.jpg', tipo: 'receta', material: 'acetato' }, // Pos 56
    { archivo: '20260805_140252.jpg', tipo: 'receta', material: 'acetato' }, // Pos 57
    { archivo: '20260805_140302.jpg', tipo: 'receta', material: 'acetato' }, // Pos 58
    { archivo: '20260805_140318.jpg', tipo: 'receta', material: 'acetato' }, // Pos 60
    { archivo: '20260805_140326.jpg', tipo: 'receta', material: 'acetato' }, // Pos 61
    { archivo: '20260805_140337.jpg', tipo: 'receta', material: 'acetato' }, // Pos 62
    { archivo: '20260805_140344.jpg', tipo: 'receta', material: 'acetato' }, // Pos 64
    { archivo: '20260805_140423.jpg', tipo: 'receta', material: 'acetato' }, // Pos 66
    { archivo: '20260805_140430.jpg', tipo: 'receta', material: 'acetato' }, // Pos 67
    { archivo: '20260805_140441.jpg', tipo: 'receta', material: 'acetato' }, // Pos 68
    { archivo: '20260805_140449.jpg', tipo: 'receta', material: 'acetato' }, // Pos 69
    { archivo: '20260805_140504.jpg', tipo: 'receta', material: 'acetato' }, // Pos 70
    { archivo: '20260805_140527.jpg', tipo: 'receta', material: 'acetato' }, // Pos 71
    { archivo: '20260805_140535.jpg', tipo: 'receta', material: 'acetato' }, // Pos 72
    { archivo: '20260805_140547.jpg', tipo: 'receta', material: 'acetato' }, // Pos 75
    { archivo: '20260805_140617.jpg', tipo: 'receta', material: 'acetato' }, // Pos 76
    { archivo: '20260805_140628.jpg', tipo: 'receta', material: 'acetato' }, // Pos 77
    { archivo: '20260218_141913.jpg', tipo: 'receta', material: 'acetato' },
    { archivo: '20260218_141922.jpg', tipo: 'receta', material: 'acetato' },
    { archivo: '20250820_161145.jpg', tipo: 'receta', material: 'metal' },
    { archivo: '20250820_161155.jpg', tipo: 'receta', material: 'metal' },
    { archivo: '20250820_161202.jpg', tipo: 'receta', material: 'metal' },
    { archivo: '20260218_141823.jpg', tipo: 'receta', material: 'metal' },
    { archivo: '20260218_141945.jpg', tipo: 'receta', material: 'metal' },
    { archivo: '20260710_150448.jpg', tipo: 'receta', material: 'combinado' },
    { archivo: '20260710_150459.jpg', tipo: 'receta', material: 'combinado' },
    { archivo: '20260710_150509.jpg', tipo: 'receta', material: 'combinado' },
    { archivo: '20260805_140356.jpg', tipo: 'receta', material: 'combinado' },
    { archivo: '20260805_140409.jpg', tipo: 'receta', material: 'combinado' }
];
