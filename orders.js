let cart = [];

// Predefined items
let items =
[{"name": "4W-CRUISER TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["4W-CR", "4W-FG", "4W-GN", "4W-GW", "4W-IB", "4W-MB", "4W-NY", "4W-ON", "4W-PU", "4W-WN"]}, 
{"name": "ACADEMY TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]},

 {"name": "ACTION TEE(G)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "STG"]}, 

{"name": "ADAPT RUNNING SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CG", "SB"]},

{"name": "ADVENTURE TEE MK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["SG", "CP","AB","OL"},

 {"name": "AERO SPRINTER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["XC-AB", "XC-BK", "XC-NB", "XC-OL", "XC-STEEL GREY"]}, {"name": "AERO SPRINTER HD", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BC", "BK-GN", "DF-IB", "ES-BL", "GN-LF", "MG-BK", "MT-NY", "NM-BK", "ST-PU", "ST-RN", "TL-CP"]}, {"name": "AERO SPRINTER XC ( H W )", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "MR", "NY", "STG", "RO"]}, {"name": "AERO SPRINTER-HD(HW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-GN", "DF-IB", "ES-BL", "MG-BK", "ST-PU", "ST-RN"]}, {"name": "AERO TERRAIN", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "OL"]}, {"name": "AERO TERRAIN - DAZE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-STG"]}, {"name": "AIRBRUSH C", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CP", "IB", "LV", "OL"]}, {"name": "ALUMNI TANK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "WH"]}, {"name": "ASTER JOGGER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "SB"]}, {"name": "AT-EASE CAPRI", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "AO", "BK", "BL-ML", "CP", "CT-GR", "NB", "SG"]}, {"name": "AUGUSTA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA-CG", "BK-BA", "NJ-MM", "NY-SB"]}, {"name": "BACK TO SMOOTH", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["NAVY BLUE", "RED"]}, {"name": "BALANCE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "BASE PACE YOGA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["MR"]}, {"name": "BASE RUNNER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "MM", "PA", "SB"]}, {"name": "BASE RUNNER(LW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK"]}, {"name": "BASELINE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BG-ML", "BK", "BR-ML", "CH-ML", "CR-ML", "DB-ML", "IB-ML"]}, {"name": "BASELINE TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BL-ML", "DG-ML", "LG-ML"]}, {"name": "BEACH TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "PA"]}, {"name": "BTR TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK"]}, {"name": "CAMINO", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-DF"]}, {"name": "CHILL SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CAMO-OG"]}, {"name": "CITY SWEAT CREW", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB"]}, {"name": "COMBAT TRACK ", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CAMO-LT OG"]}, {"name": "COMBAT WILD", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["GC-NY", "OC-BK", "OL"]}, {"name": "CONQUER TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "GR", "NY", "OL", "WH"]}, {"name": "CORE JOGGERS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL"]}, {"name": "CRESCENT CREW", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "CR", "MR"]}, {"name": "CREW NECK TEE PRINT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CP", "SG"]}, {"name": "DAZZLE SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL"]}, {"name": "DEEP BREATH TRACK ", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "STG", "NAVY BLUE"]}, {"name": "DOUBLE PLAY", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "MM", "PA", "SB"]}, {"name": "DRIVE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "ST-GR", "WN"]}, {"name": "DUVET TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["DB-ML", "SB-ML", "SG-ML"]}, {"name": "EASY BACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL"]}, {"name": "EBB TO STREET", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["RK-BG", "RK-MR", "RK-RN", "RK-WH"]}, {"name": "ENERGY BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AO", "BLACK", "FUSCHIA", "GREY", "GX-BK", "NAVY", "OL", "SLM-LG"]}, {"name": "ENTITY SHIRT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "PA", "SB", "WH"]}, {"name": "FAST N FREE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK"]}, {"name": "FLEXI COMFORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["SQ-GS", "SQ-PU", "SQ-YL"]}, {"name": "FLEXI PLUS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "FLY TECH F/SLEEVE PLAIN", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NB", "OL", "SG", "SM", "STG", "WN"]}, {"name": "FLY TECH HD", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["DF-IB", "ES-BL", "MG-BK", "ST-RN"]}, {"name": "FLY TECH TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "EO", "L.PINK", "NAVY BLUE", "OL", "SG", "SM", "STEEL GREY", "WH", "WN"]}, {"name": "FLY-BY", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["IF-GN", "IF-IG", "IF-OL", "IF-WN"]}, {"name": "FORMATION", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA-MS", "BK-PA", "NY-NJ"]}, {"name": "FOXY SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["SL-BL", "SL-DG", "SL-GR"]}, {"name": "FREE PLAY", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA-MG", "BK-ST", "NY-DF", "NY-ES"]}, {"name": "FREE PLAY(LW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["NY-ES"]}, {"name": "FRICTION RACER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "STG"]}, {"name": "GAMBIT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["NY"]}, {"name": "GEAR UP TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["GREY"]}, {"name": "GL WIND CHEATER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "GR", "NY", "OL"]}, {"name": "GL WIND CHEATER (WOH)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NB", "OL", "STG", "WH"]}, {"name": "GRIT JOGGERS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG", "WN"]}, {"name": "GRIT JOGGERS XC", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["GR", "OL", "SL-BN"]}, {"name": "GRIT LIFE JACKET", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CH-BK", "N.BLUE", "STEEL GREY"]}, {"name": "GRIT LIFE PLATINA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "MM", "NJ"]}, {"name": "GROOVER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "SL-BL", "SL-DG", "STG"]}, {"name": "HIGH IMPACT  BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "NB", "STG"]}, {"name": "HIKER-IV", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["ONION"]}, {"name": "HOT SHOT PRINT(P)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["ASSORTED", "BC-EG", "CL-AG", "CL-PF", "GL-PN", "KL-GN", "MW-NY", "PG-FL", "PK-WH", "RK-YL", "RL-MN"]}, {"name": "HOVER PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NB", "STG"]}, {"name": "HUSTLE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CR", "NY", "OL"]}, {"name": "ICON TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["4W-IB", "4W-NY"]}, {"name": "INCLINE TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL"]}, {"name": "INTEL II", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["WN"]}, {"name": "KARMA PANTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["GREY"]}, {"name": "KIC PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AO", "BK", "NY", "OL"]}, {"name": "KICK SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG", "WH", "WN"]}, {"name": "KICK SHORTS XC", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["MG", "SL-AS", "SL-BL", "SL-DG"]}, {"name": "L3516", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CORAL", "WHITE"]}, {"name": "L3516 XC", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-FU", "BK-NM"]}, {"name": "LAY UP", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "NJ", "PA"]}, {"name": "LBJ6 PRINT ", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BLACK"]}, {"name": "LOKI TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "COFFEE", "CR", "NY", "PISTA", "SB", "WH", "WN"]}, {"name": "LONG RANGE CAPRI", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CG", "SB"]}, {"name": "LPP-04", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "LPP-04 PLATINA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "CG", "PA"]}, {"name": "LPP-05", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "LPP-05 PLATINA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "CG", "PA"]}, {"name": "LUXE PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BR-ML", "CR-ML", "DB-ML", "DG-ML", "IB-ML", "LG-ML"]}, {"name": "MAGNA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NJ", "PA", "WH"]}, {"name": "MANTRA BRA HD", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["ES-BL", "MG-BK", "MT-NY", "NM-BK", "ST-PU", "ST-RN"]}, {"name": "MANTRA PLATINA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "MM", "WH"]}, {"name": "MANTRA SPORTS BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK"]}, {"name": "MANTRA XC", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "EO", "L.PINK"]}, {"name": "MERIDIAN(P)", "sizes": ["32B", "32C", "32D", "34B", "34C", "34D", "36B", "36C", "36D", "38B", "38C", "40B"], "colors": ["BLACK", "SKIN", "WHITE"]}, {"name": "META CAPRI", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["SL-BL", "SL-IB", "SL-DG", "SL-GR"]}, {"name": "NAMASTE PANTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NAVY BLUE", "OG"]}, {"name": "NEO CLASSIC TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CH-ML", "D.PINK", "N.BLUE", "PRINT ASSORTED", "PRINT BC-EG", "PRINT BH-OF", "PRINT BJ-RN", "PRINT CL-AG", "PRINT CL-PF", "PRINT DK-HP", "PRINT GL-PN", "PRINT HW-GR", "PRINT KL-GN", "PRINT MK-MR", "PRINT MW-NY", "PRINT PK-WH", "PRINT PN-CL", "PRINT RK-YL", "PRINT RL-MN", "PRINT TL-DP", "PRINT WB-PL"]}, {"name": "NEO SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-OR", "NY-GN"]}, {"name": "NOAH'S ARK TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["B.GREEN", "BK", "COFFEE", "L.GREY", "NY", "SB", "WH", "WN"]}, {"name": "NOMADIC", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG"]}, {"name": "NOMADIC SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG"]}, {"name": "PACER HD", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "STG"]}, {"name": "PHANTOM TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "CN", "NY", "ST-GR", "WN"]}, {"name": "PISTOL PANTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "DG-ML", "NY"]}, {"name": "PLY OFF TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "WN"]}, {"name": "POINT SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA-MS", "BK-BA", "NJ-NY", "PA-BA"]}, {"name": "POWER PLAY", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "PINK", "STG"]}, {"name": "PRIMO+", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AN", "BD", "EM", "PA", "PL", "WE"]}, {"name": "PRISTINE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CG", "DF", "VB"]}, {"name": "PULL ON PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "PURSUIT(G)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "SB"]}, {"name": "R F A PANTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "AS", "BK", "CG", "DF", "DL", "EM", "FG", "FU", "HR", "NY", "OL", "PA", "PK", "RM", "SG", "ST", "VB", "WE", "WN"]}, {"name": "R.A.W TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK"]}, {"name": "RACER BACK MK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "WH"]}, {"name": "RACER BACK STRETCH", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["4W-IB", "4W-OR", "FU", "MT", "MY", "SG"]}, {"name": "RAD INTENSE TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL", "STG", "WN"]}, {"name": "RAW EDGE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "GR", "NY", "OL"]}, {"name": "RECHARGE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "OL"]}, {"name": "RECHARGE(LW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK"]}, {"name": "REFOCUS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["EM", "FG", "WH"]}, {"name": "REFORM SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CG", "MM", "PA"]}, {"name": "RELAY BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "CG", "MM", "NJ"]}, {"name": "REV IT UP TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "OL"]}, {"name": "RIDGE LINE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "MM", "PA", "SB"]}, {"name": "RIDGE LINE(LW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA", "BK", "CG", "MM", "SB"]}, {"name": "RUN IT BACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG"]}, {"name": "RUN TIME TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NB"]}, {"name": "RX PANTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK"]}, {"name": "SAVAGE F/SLEEVE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BLACK", "NY", "SF", "WH", "WN"]}, {"name": "SEA SIDE", "sizes": ["S", "M", "L", "XL", "2XL"], "colors": ["BLACK", "CG", "DF", "HR", "SKIN", "VB", "WE", "WHITE"]}, {"name": "SHADOW", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["4W-GN", "4W-PU", "BK", "NB", "STEEL GREY"]}, {"name": "SHAPER-P-01", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BLACK", "SKIN", "STEEL GREY"]}, {"name": "SL CAPRI", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "STG"]}, {"name": "SL SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NB", "STG"]}, {"name": "SNAP UP", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["DB-ML", "LG-ML", "SG-ML"]}, {"name": "SPACE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "AO", "BK", "CAMO-OG", "CP", "MS", "NY", "WH"]}, {"name": "SPLASH", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "STG"]}, {"name": "STEALTH BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CG", "MM", "PA", "PISTA", "WE", "YB"]}, {"name": "STRIDE PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["DB", "LG", "MG", "OL"]}, {"name": "STUNNER TANK -01", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "IV", "MG"]}, {"name": "STUNNER TANK -02", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "IV", "MG", "MS", "ONION", "PISTA"]}, {"name": "STUNNER TANK -04", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["B.PINK", "BK", "CR", "IVORY", "MG", "MS", "NY", "ONION", "PISTA"]}, {"name": "STUNNER TANK -05", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CR", "IV", "MS", "NY"]}, {"name": "STUNNER TANK -06", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CR", "FU", "IV", "MS", "NY", "ONION"]},

{"name": "SUPER HOT SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["ASSORTED"]},

 {"name": "THE EDGE PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "OL", "WN"]}, {"name": "THRILL SEEKER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CG", "PA"]}, {"name": "THROWBACK PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BG", "BK", "DB"]}, {"name": "TIDE SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL"]}, {"name": "TRANSVERSE PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["DB", "LG", "MG", "OL"]}, {"name": "TURBO TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["CAMO-NY", "CAMO-OL"]}, {"name": "TWIN LOVE", "sizes": ["32B", "32C", "32D", "34B", "34C", "34D", "36B", "36C", "36D", "38B", "38C", "40B"], "colors": ["AB-MS", "AB-NM", "BK-FU", "CG-HP", "CR-NY", "CR2-NY", "DF-FG", "FU-WN", "MS-OL", "PK-TN", "RM-PK", "ST-WE"]}, {"name": "V-NECK TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CR", "NY", "WH"]}, {"name": "VENT TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BG-ML", "BR-ML", "CR-ML", "DB-ML", "IB-ML", "SG-ML"]}, {"name": "VENTURA TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "GP", "GR", "NY", "TQ", "WH", "WN"]}, {"name": "VENTURE TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "GR", "NY", "WH"]}, {"name": "VENTURE TEE PRINT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "GR", "NY"]}, {"name": "VITALITY BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["WHITE"]}, {"name": "VITALITY CAMI", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "AO", "BK", "MS", "NM", "RG", "SKIN", "WHITE"]}, {"name": "WAFFLE SHORTS", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "SK", "STG", "WH", "WN"]}, {"name": "WAKE UP TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "WALKIN TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BL-ML", "LG-ML", "DG-ML"]}, {"name": "WARRIOR SHORT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL", "STG"]}, {"name": "WARRIOR SHORT-DAZE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-GN", "BK-STG", "NY-WH"]}, {"name": "WATHER TANK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CR", "NY", "OL"]}, {"name": "WEST END TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "CP", "IB", "LV", "OL"]}, {"name": "WILD ICON", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NB", "OL"]}, {"name": "WIND CHEATER-II", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["AB", "BK", "NY", "OL", "STG", "WH"]}, {"name": "WONDER CROP", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "DOL", "MR", "NB", "OL", "STEEL GREY"]}, {"name": "WONDER KNICKER", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BLACK", "STEEL GREY"]}, {"name": "WORK-UP TEE", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY"]}, {"name": "Y FLOW BRA", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "PA"]}, {"name": "ZEPHYR", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK-PA", "NY-NJ", "SB-PT"]}, {"name": "ZEPHYR(LW)", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BA-PA"]}, {"name": "ZIP TRACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "BL-ML", "DG-ML", "PRINT CAMO-NY", "PRINT CAMO-OG"]}, {"name": "ZIP TRACK DRYKNIT ", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL", "STG", "WN"]}, {"name": "ADVENTURE RACERBACK ", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL", "AQ", "WH"]}, {"name": "COMMISION PANT", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["BK", "NY", "OL"]}, {"name": "RACER BACK", "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "colors": ["WN", "CR", "PU", "SG "]}, ]
  
  

 ;

// Predefined parties
let parties = [
  "Avni Traders Phonda",
"Bharne Retail Trends Panjim",
"Feelings ponda",
"Falari Enterpries Mapusa ",
"Puja Cosmetics Vasco",
"Vishnu Fancy Stores Margao",
"Poshak Retail Parvorim",
"Caro Center Margoa",
"Lovely Collection Panjim",
"Shetye Enterprises Panjim",
"cash",
"Deepak Store Mapusa",
"M S Dangui panjim",
"Advait Enterprises ",
"Par Excellence Panjim",
"Callicas canacona",
"J.V Manerkar",
"Visnu Fancy Stores Margao",
"Santosh Shopping Sanvordem",
"Baron Panjim",
"Goswami Gift Mapusa",
"Krishna Fancy Margao ",
"Femiline Collection ",
"G D Kalekar Mapusa",
"MS Dangui Mapusa",
"Roop Darpan Bicholim",
"Mahamay Cosmetics Bicholim ",
"Chirag Bag House Panjim",
"Jagannath Kavlekar LLP Mapusa",
"Siddhivinayak Mapusa",

];

document
  .getElementById("saveOrderBtn")
  .addEventListener("click", showOrderSummaryModal);

const partySearch = document.getElementById("partySearch");
const partyList = document.getElementById("partyList");

partySearch.addEventListener("focus", () => showParties());
partySearch.addEventListener("input", () => showParties(partySearch.value));

document.addEventListener("click", function (e) {
  if (e.target !== partySearch && !partyList.contains(e.target)) {
    partyList.style.display = "none";
  }
});


createCartSummaryTable();

document.getElementById("addToCartBtn").addEventListener("click", addToCart);
document
  .getElementById("saveOrderBtn")
  .addEventListener("click", showOrderSummaryModal);


//----------------------------------------party--------------------------------
function sortParties() {
    parties.sort((a, b) => {
      if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      }
      // Handle non-string elements (you can modify this part based on your needs)
      return 0;
    });
  }
  function showParties(filter = "") {
    partyList.innerHTML = "";
    const filteredParties = parties.filter((party) => {
      if (typeof party === "string") {
        return party.toLowerCase().includes(filter.toLowerCase());
      }
      return false; // or handle non-string elements as needed
    });
  
    filteredParties.forEach((party) => {
      const item = document.createElement("a");
      item.classList.add("list-group-item", "list-group-item-action");
      item.textContent = party;
      item.href = "#";
      item.addEventListener("click", function (e) {
        e.preventDefault();
        partySearch.value = party;
        partyList.style.display = "none";
      });
      partyList.appendChild(item);
    });
  
    if (filteredParties.length === 0 && filter !== "") {
      const addNewItem = document.createElement("a");
      addNewItem.classList.add("list-group-item", "list-group-item-action");
      addNewItem.textContent = `Add "${filter}" as a new party`;
      addNewItem.href = "#";
      addNewItem.addEventListener("click", function (e) {
        e.preventDefault();
        addNewParty(filter);
      });
      partyList.appendChild(addNewItem);
    }
  
    partyList.style.display = "block";
  }
  
  function addNewParty(partyInput) {
    const [partyName, area] = partyInput.split(" - ").map((s) => s.trim());
    if (!partyName || !area) {
      alert(
        'Please enter the party name and area in the format "PARTYNAME - AREA"'
      );
      return;
    }
  
    const fullPartyName = `${partyName} - ${area}`;
    if (!parties.includes(fullPartyName)) {
      parties.push(fullPartyName);
      sortParties();
      // Save only the new party to Firebase
      firebase
        .database()
        .ref("parties/" + fullPartyName.replace(".", "_"))
        .set(true);
      console.log(`Added new party: ${fullPartyName}`);
  
      // Log the activity
      const now = new Date();
      const activityLog = {
        action: "Created new party",
        partyName: fullPartyName,
        timestamp: now.toISOString(),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        username: username,
      };
      firebase.database().ref("activityLogs").push(activityLog);
  
      // Send Telegram message
      const chatId = "-4527298165";
      const botToken = "7401966895:AAFu7gNrOPhMXJQNJTRk4CkK4TjRr09pxUs";
      const message = `${username}: created new party ${fullPartyName}`;
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log("Telegram message sent:", data))
        .catch((error) =>
          console.error("Error sending Telegram message:", error)
        );
    }
    partySearch.value = fullPartyName;
    partyList.style.display = "none";
  }
 

// ---------------------Color Management
function handleColorContainerClick(event) {
  // Check if the click was on the input or label
  if (
    event.target.classList.contains("quantity-input") ||
    event.target.classList.contains("size-label")
  ) {
    return; // Do nothing if the click was on an input or label
  }

  // Toggle the grid if the click was on the container itself
  const colorContainer = event.currentTarget;
  const sizeQuantityGrid = colorContainer.querySelector(".size-quantity-grid");

  if (
    sizeQuantityGrid.style.display === "none" ||
    sizeQuantityGrid.style.display === ""
  ) {
    sizeQuantityGrid.style.display = "block";
  } else {
    sizeQuantityGrid.style.display = "none";
  }
}

function getBackgroundColor(color) {
  const colorMap = {
      'BLACK': 'black',
      'WHITE': '#FFFFFF',
      'GRW': '#341917',
      'GRYMRL': '#d8d7dc',
      'LILAST': `url("https://www.enamor.co.in/cdn/shop/files/5_ea03e152-8bbc-4cb3-b605-7ec29a515d86.jpg?v=1684217469") 75% 50% / cover no-repeat`,
      'LIMAPR': 'url("https://www.enamor.co.in/cdn/shop/files/1AvTEPQ_KfpsXo7Tzhyb6Q45y0usBJr7S.jpg?v=1696598482") 75% 50% /  cover no-repeat',
      'RESWPR': 'url(" https://www.enamor.co.in/cdn/shop/files/1nncqC7eWXEd5EVIPwJJUGsS4YfX-Igyz.jpg?v=1696598470") 75% 50% /  cover no-repeat',
      'EVB': 'navy',
      'PEARL': '#E6C7B8',
      'SKIN': '#E4C7A7',
      'DIO': 'white',
      'JBK': '#0A0A0A',
      'PCMARG': 'cyan',
      'PSMARG': 'lightpink',
      'EVEBLU': '#222133',
      'MASAI' : 'url(" https://www.enamor.co.in/cdn/shop/products/a014_masai_13__1_large.jpg?v=1676456937") 30% 50% /  1500% no-repeat',
      'BPRP' : 'url(" https://www.enamor.co.in/cdn/shop/files/5_4fba307d-bfc2-471e-b91f-c1b5bf2d0dba_large.jpg?v=1683789659") 75% 50% /  cover no-repeat',
      'PPRP': 'url("https://www.enamor.co.in/cdn/shop/files/5_5b158d6a-bc65-49bd-8f0f-4382ba1b513f_large.jpg?v=1683789670")75% 50% /  cover no-repeat',   
      'CPM': '#D2E3EB',   
      'GKP': 'url("https://www.enamor.co.in/cdn/shop/products/6_836_large.jpg?v=1700655975")75% 50% /  cover no-repeat',  
      'ODM': '#EEC9D3',  
      'RSBLSH': '#D5868E',  
      'PLS': '#D4C2B6',  
      'GRYMEL': '#d8d7dc',  
      'BDE': 'url("https://www.enamor.co.in/cdn/shop/products/00a027bde_1_4_large.jpg?v=1676458803")65% 100% /  1600% no-repeat',  
      'RTE': '#CC746D',  
      'ECL': '#2F2F4A',  
      'SLI': 'url("https://www.enamor.co.in/cdn/shop/products/6_841_12_large.jpg?v=1676464479")0% 0% /  1000% no-repeat',  
      'CHYBLS': 'url("https://www.enamor.co.in/cdn/shop/products/4_1000_1_large.jpg?v=1716458121")67% 90% /  1400% no-repeat',  
      'CHIVIO': 'url("https://www.enamor.co.in/cdn/shop/files/6_ad2713ea-70f4-497a-9c1b-a33d892d2cd2_large.jpg?v=1708944721")75% 80% /  1000% no-repeat',
      'CMG': '#B5C4D8',
      'GSP': 'url("https://www.enamor.co.in/cdn/shop/products/6_876.jpg?v=1676466389")0% 20% /  1000% no-repeat',
      'DDO': 'url("https://www.enamor.co.in/cdn/shop/products/6_875.jpg?v=1676466411")0% 20% /  1000% no-repeat',
      'LPR': 'url("https://www.enamor.co.in/cdn/shop/files/18b1XCLuTl3M_ytx9Tb1tLfUEK1RDyrBp_large.jpg?v=1696598795")50% 50% /  500% no-repeat',
      'PURPLE': '#6C2B6A',
      'TMG':'#E67F81',
      'RVL': 'url("https://www.enamor.co.in/cdn/shop/products/6_920_4.jpg?v=1677836790")0% 20% /  1000% no-repeat',
      'CFAUP': 'url("https://www.enamor.co.in/cdn/shop/files/5_d2d4cfd4-fb0e-4566-b6a7-8ff9aaaa06ce_large.jpg?v=1683790128")0% 30% /  500% no-repeat',
      'TLPP': 'url("https://www.enamor.co.in/cdn/shop/files/5_eb8ecf80-5f52-46a4-a872-d2e1477beb61.jpg?v=1683790138")0% 30% /  500% no-repeat',
      'PHB': '#E78A84',
      'OLT':'#E9E2D7',
      'BRI':'#B82230',
      'BDE': '#E2C2BF',
      'PBH':'#D0A095',
      'TSE': '#8DC8D0',
      'PHP':'#EAD4CC',
      'MFL': 'url("https://www.enamor.co.in/cdn/shop/products/6_888.jpg?v=1676462012")50% 100% /  800% no-repeat',  
      'GRS': 'linear-gradient(to left, #341917 50%, #E4C7A7 50%)',
      'WHG': 'linear-gradient(to left, #FFFFFF 50%, #d8d7dc 50%)',
      'DHP': 'url("https://www.enamor.co.in/cdn/shop/products/5_1089.jpg?v=1676464602")50% 80% /  800% no-repeat',  
      'MMV': 'url("https://www.enamor.co.in/cdn/shop/products/5_1553.jpg?v=1676466172")50% 80% /  800% no-repeat',  
      'MLP': 'url("https://www.enamor.co.in/cdn/shop/products/1_2024_1_2.jpg?v=1676460147")50% 82% /  800% no-repeat',  
      'PFI': '#FEE0E0',
      'ALS': '#ECD7D7',
      'LSBNBL': '#1B2032',
      'OCH': '#D4979E',
      'PSTLIL':'#E8DDEA',
      'ARO': 'url("https://www.enamor.co.in/cdn/shop/products/6_869_5.jpg?v=1676466323")50% 82% /  800% no-repeat',
      'AUM': 'url("https://www.enamor.co.in/cdn/shop/products/4_1092_1_4.jpg?v=1676458943")60% 86% /  1200% no-repeat',
      'CLM':'#F0EAE5',
      'WFM': 'url("https://www.enamor.co.in/cdn/shop/files/ENAMORDAY-1_4624_Details_6fbe6d62-5cd6-4f86-9c39-44d156c0e8d8.jpg?v=1718885423")60% 86% /  1200% no-repeat',
      'MNPP': 'url("https://www.enamor.co.in/cdn/shop/products/f097_midnight_peony_print_7.jpg?v=1700657442")0% 30% /  500% no-repeat',
      'LCR': 'url("https://www.enamor.co.in/cdn/shop/products/6_459_17.jpg?v=1676464469")100% 30% /  500% no-repeat',
      'NISH':'#372C3B',
     
      'NAVY': '#242638',
      'GOBBLU': '#A5BBCF',
      'JETBLK': '#000000',
      'OLVNT':'#483E36',
      'ROUGE':'#EEA49F',
      'HTMBCO': 'url("https://www.enamor.co.in/cdn/shop/files/5_f3f32b28-5db7-4c42-aba8-97fc355e081d.jpg?v=1709016268")50% 60% /  500% no-repeat',
      'PFPGCO': 'url("https://www.enamor.co.in/cdn/shop/files/5_bec821e4-f5ba-4c0c-a013-6048a8ae8005.jpg?v=1709016265")50% 60% /  500% no-repeat',
  };
  return colorMap[color.toUpperCase()] || "";
}

function getContrastColor(hexColor) {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function createColorContainer(item, color) {
  const backgroundColor = getBackgroundColor(color);
  const textColor = backgroundColor
    ? getContrastColor(backgroundColor)
    : "#000000";
  const containerStyle = backgroundColor
    ? `background-color: ${backgroundColor}; color: ${textColor};`
    : "border: 1px solid #ccc;";

  return `
      <div class="color-container" style="${containerStyle}" data-color="${color}">
          <h4>${color}</h4>
          <div class="size-quantity-grid" style="display: none;">
              ${item.sizes
                .map(
                  (size) => `
                  <div class="size-quantity-row">
                      <label class="size-label">${size}</label>
                      <input type="number" name="qty_${color}_${size}" min="0" class="quantity-input">
                  </div>
              `
                )
                .join("")}
          </div>
      </div>
  `;
}

function handleNewColorClick(event) {
  event.stopPropagation();
  const colorName = prompt("Enter the name of the new color:");
  if (colorName && colorName.trim() !== "") {
      const newColorName = `${colorName.trim()}(N)`;
      const itemName = document.querySelector("#itemDetailsContainer h3").textContent;
      const item = items.find(i => i.name === itemName);
      if (item) {
          item.colors.push(newColorName);
          showItemDetails(item);
      }
  }
}
//--------- User Interface Navigation
function returnToHomepage() {
  document.getElementById("partySearch").value = "";
  document.getElementById("itemSearch").value = "";
  cart = [];
  updateCartSummary();

  const itemDetailsContainer = document.getElementById("itemDetailsContainer");
  if (itemDetailsContainer) {
    itemDetailsContainer.remove();
  }

  loadPendingOrders(); // Refresh the pending orders list
  console.log("Returned to homepage");
}

function showItemDetails(item) {
  const existingDetailsContainer = document.getElementById(
    "itemDetailsContainer"
  );
  if (existingDetailsContainer) {
    existingDetailsContainer.remove();
  }

  const detailsContainer = document.createElement("div");
  detailsContainer.id = "itemDetailsContainer";
  detailsContainer.innerHTML = `
      <h3 style="text-align: center;">${item.name}</h3>
      <div class="color-containers">
          ${item.colors
            .map((color) => createColorContainer(item, color))
            .join("")}
          ${createColorContainer(item, "[new color]")}
      </div>
  `;

  const itemList = document.getElementById("itemList");
  itemList.insertAdjacentElement("afterend", detailsContainer);

  // Add click event listeners to color containers
  detailsContainer.querySelectorAll(".color-container").forEach((container) => {
    container.addEventListener("click", handleColorContainerClick);
  });

  // Add event listener for the [new color] container
  const newColorContainer = detailsContainer.querySelector('.color-container[data-color="[new color]"]');
  newColorContainer.addEventListener("click", handleNewColorClick);
} 

function resetItemSelection() {
  document.getElementById("itemSearch").value = "";
  const itemDetailsContainer = document.getElementById("itemDetailsContainer");
  if (itemDetailsContainer) {
    itemDetailsContainer.remove();
  }
}


// ------------------Audio Feedback
function playConfirmationSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

function playAdvancedConfirmationSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create oscillators
  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  
  // Create gain nodes
  const gainNode1 = audioContext.createGain();
  const gainNode2 = audioContext.createGain();
  
  // Configure oscillators
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(880, audioContext.currentTime); // A5
  
  // Configure gain nodes
  gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode1.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
  gainNode1.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
  
  gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode2.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.2);
  gainNode2.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.6);
  
  // Connect nodes
  osc1.connect(gainNode1);
  osc2.connect(gainNode2);
  gainNode1.connect(audioContext.destination);
  gainNode2.connect(audioContext.destination);
  
  // Start and stop the sound
  osc1.start(audioContext.currentTime);
  osc2.start(audioContext.currentTime + 0.1);
  osc1.stop(audioContext.currentTime + 0.5);
  osc2.stop(audioContext.currentTime + 0.6);
} 

//----------------// Notifications
function sendTelegramNotification(partyName, totalQuantity, orderNumber, imgData) {
  const token = "6489265710:AAFx6-OaL09SpByMPyfiQBmgetvbtx0InyI";
  const chatId = "-1002170737027";
  const message = `New order received:\nParty Name: ${partyName}\nTotal Quantity: ${totalQuantity}\nOrder Number: ${orderNumber}`;

  // First, send the text message
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Telegram text notification sent:", data))
    .catch((error) =>
      console.error("Error sending Telegram text notification:", error)
    );

  // Then, send the image
  // Convert base64 image data to blob
  const byteCharacters = atob(imgData.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: 'image/png'});

  // Create FormData and append the image
  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('photo', blob, 'order_summary.png');

  // Send the image
  fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => console.log("Telegram image sent:", data))
    .catch(error => console.error("Error sending Telegram image:", error));
}


//------------ Item and Cart Management
function calculateTotalQuantity() {
  return cart.reduce((total, item) => {
    return (
      total +
      Object.values(item.colors).reduce((itemTotal, color) => {
        return (
          itemTotal +
          Object.values(color).reduce((colorTotal, qty) => colorTotal + qty, 0)
        );
      }, 0)
    );
  }, 0);
}

function updateItemSearchDatalist() {
  const datalist = document.getElementById("itemList");
  datalist.innerHTML = "";
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    datalist.appendChild(option);
  });
}

function addNewItem(itemName) {
  if (!items.some((item) => item && item.name === itemName)) {
      // Create a modal dynamically
      const modal = document.createElement("div");
      modal.className = "modal fade";
      modal.id = "newItemModal";
      modal.setAttribute("tabindex", "-1");
      modal.innerHTML = `
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Add New Item</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="mb-3">
                          <label for="itemName" class="form-label">Item Name</label>
                          <input type="text" class="form-control" id="itemName" required>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <h6>Number Cup Size</h6>
                              <div id="numCupSizes" class="row"></div>
                              <div class="mt-2">
                                  <input type="text" class="form-control" id="customNumCupSize" placeholder="Enter custom size">
                              </div>
                          </div>
                          <div class="col-md-6">
                              <h6>General Size</h6>
                              <div id="generalSizes" class="row"></div>
                              <div class="mt-2">
                                  <input type="text" class="form-control" id="customGeneralSize" placeholder="Enter custom size">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="saveNewItem">Save Item</button>
                  </div>
              </div>
          </div>
      `;
      document.body.appendChild(modal);

      const newItemModal = new bootstrap.Modal(document.getElementById("newItemModal"));

      const numCupSizes = ["32B", "32C", "32D", "32Z", "34B", "34C", "34D", "34Z", "36B", "36C", "36D", "36Z", "38B", "38C", "38D", "38Z", "40B", "40C", "40D", "42B", "42C"];
      const generalSizes = ["XS", "S", "M", "L", "XL", "2XL"];

      const numCupSizesContainer = document.getElementById("numCupSizes");
      const generalSizesContainer = document.getElementById("generalSizes");

      // Function to create checkbox in a column layout
      function createCheckbox(size, container) {
          const col = document.createElement("div");
          col.className = "col-6 mb-2";
          col.innerHTML = `
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="${size}" id="${size}">
                  <label class="form-check-label" for="${size}">${size}</label>
              </div>
          `;
          container.appendChild(col);
      }

      // Create Number Cup Size checkboxes
      numCupSizes.forEach(size => createCheckbox(size, numCupSizesContainer));

      // Create General Size checkboxes
      generalSizes.forEach(size => createCheckbox(size, generalSizesContainer));

      // Function to handle custom size input
      function handleCustomSizeInput(inputId, containerid) {
          const customSizeInput = document.getElementById(inputId);
          const container = document.getElementById(containerid);

          customSizeInput.addEventListener("blur", () => {
              const customSize = customSizeInput.value.trim();
              if (customSize) {
                  createCheckbox(customSize, container);
                  customSizeInput.value = "";
              }
          });
      }

      // Set up custom size inputs
      handleCustomSizeInput("customNumCupSize", "numCupSizes");
      handleCustomSizeInput("customGeneralSize", "generalSizes");

      // Pre-fill the item name
      document.getElementById("itemName").value = itemName;

      document.getElementById("saveNewItem").addEventListener("click", function () {
          const itemName = document.getElementById("itemName").value.trim();
          if (!itemName) {
              alert("Please enter an item name.");
              return;
          }

          const selectedSizes = [
              ...document.querySelectorAll("#numCupSizes input:checked"),
              ...document.querySelectorAll("#generalSizes input:checked")
          ].map(input => input.value);

          if (selectedSizes.length === 0) {
              alert("Please select at least one size.");
              return;
          }

          const newItem = { name: itemName, sizes: selectedSizes, colors: ["Any Color"] };
          items.push(newItem);
          items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

          console.log(`Added new item: ${itemName}`);
          alert(`New item "${itemName}" has been added successfully.`);
          newItemModal.hide();
          document.body.removeChild(modal);
          
          document.getElementById("itemSearch").value = itemName;
          document.getElementById("itemList").style.display = "none";
          showItemDetails(newItem);
      });

      newItemModal.show();
  } else {
      console.log(`Item "${itemName}" already exists.`);
      alert(`Item "${itemName}" already exists in the list.`);
  }
} 

function getTotalQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.total, 0);
}

function updateCartButtonText(totalQuantity) {
  const cartButton = document.getElementById("saveOrderBtn");
  cartButton.textContent = `Process Order`;
}

function addToCart() {
  const itemName = document.getElementById("itemSearch").value;
  const item = items.find((i) => i.name === itemName);

  if (!item) {
      alert("Please select a valid item.");
      return;
  }

  const cartItem = {
      name: itemName,
      colors: {},
  };

  let itemAdded = false;
  let itemTotalQuantity = 0;

  // Include all colors, including the new ones with (N)
  item.colors.forEach((color) => {
      cartItem.colors[color] = {};
      item.sizes.forEach((size) => {
          const qty =
              parseInt(
                  document.querySelector(`input[name="qty_${color}_${size}"]`).value
              ) || 0;
          if (qty > 0) {
              cartItem.colors[color][size] = qty;
              itemAdded = true;
              itemTotalQuantity += qty;
          }
      });
  });

  if (!itemAdded) {
      alert("Please select at least one size and quantity.");
      return;
  }

  const existingItemIndex = cart.findIndex((item) => item.name === itemName);
  if (existingItemIndex !== -1) {
      // Merge quantities for existing item
      Object.keys(cartItem.colors).forEach((color) => {
          if (!cart[existingItemIndex].colors[color]) {
              cart[existingItemIndex].colors[color] = {};
          }
          Object.keys(cartItem.colors[color]).forEach((size) => {
              if (cart[existingItemIndex].colors[color][size]) {
                  cart[existingItemIndex].colors[color][size] +=
                      cartItem.colors[color][size];
              } else {
                  cart[existingItemIndex].colors[color][size] =
                      cartItem.colors[color][size];
              }
          });
      });
  } else {
      cart.push(cartItem);
  }

  updateCartSummary();
  updateCartButtonText(calculateTotalQuantity());
  updateItemDetailsAfterAddToCart(item);
}

function updateQuantity(size, change) {
  const input = document.getElementById(`qty_${size}`);
  if (input) {
    let newValue = parseInt(input.value) + change;
    newValue = Math.max(0, newValue); // Ensure non-negative value
    input.value = newValue;
  }
}

function updateItemDetailsAfterAddToCart(item) {
  const detailsContainer = document.getElementById("itemDetailsContainer");
  if (detailsContainer) {
    const colorContainers =
      detailsContainer.querySelectorAll(".color-container");
    colorContainers.forEach((container) => {
      const color = container.dataset.color;
      const sizeQuantityGrid = container.querySelector(".size-quantity-grid");
      const inputs = sizeQuantityGrid.querySelectorAll('input[type="number"]');
      inputs.forEach((input) => {
        input.value = ""; // Reset all inputs
      });
    });
  }

  // Optionally, you can add a visual feedback that the item was added to the cart
  showAddedToCartFeedback();
}

function showAddedToCartFeedback() {
  const feedback = document.createElement("div");
  feedback.textContent = "Added to cart";
  feedback.style.position = "fixed";
  feedback.style.top = "20px";
  feedback.style.right = "20px";
  feedback.style.backgroundColor = "#4CAF50";
  feedback.style.color = "white";
  feedback.style.padding = "10px";
  feedback.style.borderRadius = "5px";
  feedback.style.zIndex = "1000";
  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
  }, 2000);
}

// --------------Cart Summary
function updateCartSummary() {
  const cartSummary =
    document.getElementById("cartSummary") || createCartSummaryTable();
  const tbody = cartSummary.querySelector("tbody");
  tbody.innerHTML = "";

  let totalQuantity = 0;

  cart.forEach((item, itemIndex) => {
    Object.entries(item.colors).forEach(([color, sizes]) => {
      let colorTotal = 0;
      let sizesAndQuantities = [];

      Object.entries(sizes).forEach(([size, qty]) => {
        if (qty > 0) {
          sizesAndQuantities.push(`${size}/${qty}`);
          colorTotal += qty;
          totalQuantity += qty;
        }
      });

      if (colorTotal > 0) {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${item.name} (${color})</td>
                    <td>${sizesAndQuantities.join(", ")}</td>
                    <td>${colorTotal}</td>
                `;
        row.classList.add("clickable-row");
        row.addEventListener("click", () =>
          showEditItemModal(itemIndex, color, false)
        );
        tbody.appendChild(row);
      }
    });
  });

  // Update total quantity in the cart button
  updateCartButtonText(totalQuantity);
}

function createCartSummaryTable() {
  const table = document.createElement("table");
  table.id = "cartSummary";
  table.className = "table table-bordered mt-4";
  table.innerHTML = `
        <thead>
            <tr>
                <th>Item Name & Color</th>
                <th>Size and Qty</th>
                <th>(T)</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
  document.getElementById("orders").appendChild(table);
  return table;
}

function editCartSummaryItem(
  itemIndex,
  colorIndex,
  isOrderSummaryModal = false
) {
  console.log("editCartSummaryItem called with:", {
    itemIndex,
    colorIndex,
    isOrderSummaryModal,
  });

  try {
    const item = cart[itemIndex];
    if (!item) {
      console.error("Item not found in cart:", itemIndex);
      alert("Error: Item not found in cart.");
      return;
    }

    const colorKeys = Object.keys(item.colors);
    const color = colorKeys[colorIndex];
    if (!color) {
      console.error("Color not found for item:", {
        itemIndex,
        colorIndex,
        colorKeys,
      });
      alert("Error: Color not found for item.");
      return;
    }

    const sizes = Object.keys(item.colors[color]);
    let newTotal = 0;

    sizes.forEach((size) => {
      const newQty = parseInt(document.getElementById(`qty_${size}`).value);
      if (newQty > 0) {
        item.colors[color][size] = newQty;
        newTotal += newQty;
      } else {
        delete item.colors[color][size];
      }
    });

    if (newTotal === 0) {
      // If all quantities for this color are 0, remove the color
      delete item.colors[color];
      if (Object.keys(item.colors).length === 0) {
        // If no colors left, remove the item from cart
        cart.splice(itemIndex, 1);
      }
    }

    updateCartSummary();
    if (isOrderSummaryModal) {
      updateModalCartSummary();
    }

    console.log("Cart updated:", cart);
  } catch (error) {
    console.error("Error in editCartSummaryItem:", error);
    alert(
      "An error occurred while trying to save the changes. Please try again."
    );
  }
}
function deleteCartItem(itemIndex, color, isOrderSummaryModal) {
  const item = cart[itemIndex];
  delete item.colors[color];
  if (Object.keys(item.colors).length === 0) {
    cart.splice(itemIndex, 1);
  }

  updateCartSummary();
  if (isOrderSummaryModal) {
    updateModalCartSummary();
  }
} 

// --------Modals
function createModal(partyName, dateTime, orderNumber) {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "orderConfirmationModal";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Order Confirmation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Party Name:</strong> ${partyName}</p>
          <p><strong>Date and Time:</strong> ${new Date(dateTime).toLocaleString()}</p>
          <p><strong>Order Number:</strong> ${orderNumber}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  return modal;
}


function updateModalContent(orderNumber) {
  document.getElementById("orderNumberSpan").textContent = orderNumber;
}


function showOrderSummaryModal() {
  console.log("showOrderSummaryModal function called");
  try {
    // Remove existing modal if present
    const existingModal = document.getElementById("orderSummaryModal");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "orderSummaryModal";
    modal.setAttribute("tabindex", "-1");
    modal.innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Summary</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Loading order summary...</p>
          </div>
          <div class="modal-footer flex-column align-items-stretch">
            <div class="mb-3 w-100">
              <label for="orderNote" class="form-label">Order Note:</label>
              <textarea class="form-control" id="orderNote" rows="3" placeholder="Enter any special instructions here..."></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="placeOrderBtn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalInstance = new bootstrap.Modal(document.getElementById("orderSummaryModal"));
    modalInstance.show();

    console.log("Modal created and shown");

    // We'll add the content after the modal is shown
    setTimeout(() => {
      try {
        const modalBody = document.querySelector("#orderSummaryModal .modal-body");
        modalBody.innerHTML = `
          <p><strong>Party Name:</strong> <span id="modalPartyName"></span></p>
          <div id="modalCartSummary"></div>
          <p><strong>Total Quantity:</strong> <span id="modalTotalQuantity"></span></p>
        `;

        document.getElementById("modalPartyName").textContent = document.getElementById("partySearch").value;
        updateModalCartSummary();

        // Add event listener to the Place Order button
        document.getElementById("placeOrderBtn").addEventListener("click", handlePlaceOrder);

        console.log("Modal content updated");
      } catch (innerError) {
        console.error("Error updating modal content:", innerError);
        document.querySelector("#orderSummaryModal .modal-body").innerHTML = `<p>Error loading order summary. Please try again.</p>`;
      }
    }, 100);
  } catch (error) {
    console.error("Error in showOrderSummaryModal:", error);
    alert("An error occurred while showing the order summary. Please try again.");
  }
}

/* function showOrderSummaryModal() {
  console.log("showOrderSummaryModal function called");
  try {
    // Remove existing modal if present
    const existingModal = document.getElementById("orderSummaryModal");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "orderSummaryModal";
    modal.setAttribute("tabindex", "-1");
    modal.innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Summary</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Loading order summary...</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="placeOrderBtn">Place Order</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalInstance = new bootstrap.Modal(document.getElementById("orderSummaryModal"));
    modalInstance.show();

    console.log("Modal created and shown");

    // We'll add the content after the modal is shown
    setTimeout(() => {
      try {
        const modalBody = document.querySelector("#orderSummaryModal .modal-body");
        modalBody.innerHTML = `
          <p><strong>Party Name:</strong> <span id="modalPartyName"></span></p>
          <div id="modalCartSummary"></div>
          <p><strong>Total Quantity:</strong> <span id="modalTotalQuantity"></span></p>
        `;

        document.getElementById("modalPartyName").textContent = document.getElementById("partySearch").value;
        updateModalCartSummary();

        // Add event listener to the Place Order button
        document.getElementById("placeOrderBtn").addEventListener("click", handlePlaceOrder);

        console.log("Modal content updated");
      } catch (innerError) {
        console.error("Error updating modal content:", innerError);
        document.querySelector("#orderSummaryModal .modal-body").innerHTML = `<p>Error loading order summary. Please try again.</p>`;
      }
    }, 100);


  } catch (error) {
    console.error("Error in showOrderSummaryModal:", error);
    alert("An error occurred while showing the order summary. Please try again.");
  } 
  
}*/
function showEditItemModal(itemIndex, color, isOrderSummaryModal = false) {
  const item = cart[itemIndex];
  const sizes = Object.keys(item.colors[color]);

  const existingModal = document.getElementById("editItemModal");
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "editItemModal";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Item: ${
                      item.name
                    } (${color})</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${sizes
                      .map(
                        (size) => `
                        <div class="mb-3 d-flex align-items-center">
                            <label class="form-label me-2 mb-0" style="width: 50px;">${size}</label>
                            <div class="input-group" style="width: 150px;">
                                <button class="btn btn-outline-secondary minus-btn" type="button" data-size="${size}">-</button>
                                <input type="number" class="form-control text-center" id="qty_${size}" value="${
                          item.colors[color][size] || 0
                        }" min="0" readonly>
                                <button class="btn btn-outline-secondary plus-btn" type="button" data-size="${size}">+</button>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="deleteItemBtn">Delete Item</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="saveItemBtn">Save Changes</button>
                </div>
            </div>
        </div>
    `;
  document.body.appendChild(modal);

  const editModalInstance = new bootstrap.Modal(
    document.getElementById("editItemModal")
  );

  // Add event listeners for plus and minus buttons
  modal.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", () => updateQuantity(btn.dataset.size, -1));
  });
  modal.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", () => updateQuantity(btn.dataset.size, 1));
  });

  document.getElementById("saveItemBtn").addEventListener("click", () => {
    saveItemChanges(itemIndex, color, isOrderSummaryModal);
    editModalInstance.hide();
  });

  document.getElementById("deleteItemBtn").addEventListener("click", () => {
    deleteCartItem(itemIndex, color, isOrderSummaryModal);
    editModalInstance.hide();
  });

  editModalInstance.show();
}
function saveItemChanges(itemIndex, color, isOrderSummaryModal) {
  const item = cart[itemIndex];
  const sizes = Object.keys(item.colors[color]);
  let totalQuantity = 0;

  sizes.forEach((size) => {
    const newQty = parseInt(document.getElementById(`qty_${size}`).value);
    if (newQty > 0) {
      item.colors[color][size] = newQty;
      totalQuantity += newQty;
    } else {
      delete item.colors[color][size];
    }
  });

  if (totalQuantity === 0) {
    delete item.colors[color];
    if (Object.keys(item.colors).length === 0) {
      cart.splice(itemIndex, 1);
    }
  }

  updateCartSummary();
  if (isOrderSummaryModal) {
    updateModalCartSummary();
  }
}

function updateModalCartSummary() {
  const modalBody = document.querySelector("#orderSummaryModal .modal-body");
  if (!modalBody) {
    console.error("Modal body not found");
    return;
  }

  const partyName = document.getElementById("partySearch").value || "N/A";
  let totalQuantity = 0;

  let modalContent = `
        <p><strong>Party Name:</strong> ${partyName}</p>
        <table class="table table-bordered table-hover modal-cart-summary">
            <thead>
                <tr>
                    <th>Item Name & Color</th>
                    <th>Sizes and Qty</th>
                    <th>Item Total</th>
                </tr>
            </thead>
            <tbody>
    `;

  if (!Array.isArray(cart) || cart.length === 0) {
    modalContent += '<tr><td colspan="3">No items in cart</td></tr>';
  } else {
    cart.forEach((item, index) => {
      if (!item || typeof item !== "object") return;

      Object.entries(item.colors || {}).forEach(([color, sizes]) => {
        if (typeof sizes === "object") {
          let itemTotal = 0;
          let sizesAndQty = [];

          Object.entries(sizes).forEach(([size, qty]) => {
            if (qty > 0) {
              sizesAndQty.push(`${size}/${qty}`);
              itemTotal += qty;
              totalQuantity += qty;
            }
          });

          if (itemTotal > 0) {
            modalContent += `
                            <tr class="clickable-row" data-index="${index}" data-color="${color}">
                                <td>${item.name} (${color})</td>
                                <td>${sizesAndQty.join(", ") || "N/A"}</td>
                                <td>${itemTotal}</td>
                            </tr>
                        `;
          }
        }
      });
    });
  }

  modalContent += `
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><strong>Total Quantity</strong></td>
                    <td><strong>${totalQuantity}</strong></td>
                </tr>
            </tfoot>
        </table>
    `;

  modalBody.innerHTML = modalContent;

  // Add click event listener to rows
  modalBody.querySelectorAll(".clickable-row").forEach((row) => {
    row.addEventListener("click", function () {
      const itemIndex = parseInt(this.dataset.index);
      const color = this.dataset.color;
      showEditItemModal(itemIndex, color, true);
    });
  });
}

function showOrderConfirmationModal(order, imgData) {
  console.log("Showing order confirmation modal");
  
  // Remove any existing modal
  const existingModal = document.getElementById("orderConfirmationModal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create the modal
  const modal = createModal(order.partyName, order.dateTime, order.orderNumber);
  
  // Add advanced animation to the modal
  const animationContainer = document.createElement('div');
  animationContainer.className = 'confirmation-animation';
  animationContainer.innerHTML = `
    <div class="circle"></div>
    <div class="checkmark"></div>
    <div class="pulse"></div>
  `;
  modal.querySelector('.modal-body').prepend(animationContainer);

  // Add styles for the animation
  const style = document.createElement('style');
  style.textContent = `
    .confirmation-animation {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 20px auto;
    }
    .circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #23b26d;
      opacity: 0;
      animation: circleAnimation 0.5s forwards;
    }
    .checkmark {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30%;
      height: 60%;
      border-right: 12px solid white;
      border-bottom: 12px solid white;
      transform: translate(-50%, -60%) rotate(45deg) scale(0);
      animation: checkmarkAnimation 0.5s 0.5s forwards;
    }
    .pulse {
      position: absolute;
      top: -5%;
      left: -5%;
      width: 110%;
      height: 110%;
      border-radius: 50%;
      border: 5px solid #23b26d;
      opacity: 0;
      animation: pulseAnimation 2s 1s infinite;
    }
    @keyframes circleAnimation {
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes checkmarkAnimation {
      to { transform: translate(-50%, -60%) rotate(45deg) scale(1); }
    }
    @keyframes pulseAnimation {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.1); opacity: 0; }
    }
    .modified-order {
      color: #ff6600;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // Update order number display
  const orderNumberElement = modal.querySelector('.order-number');
  if (orderNumberElement) {
    orderNumberElement.textContent = order.orderNumber;
    if (order.orderNumber.startsWith('Modified')) {
      orderNumberElement.classList.add('modified-order');
    }
  }

  document.body.appendChild(modal);

  // Initialize the modal
  let modalInstance;
  try {
    modalInstance = new bootstrap.Modal(document.getElementById("orderConfirmationModal"));
  } catch (error) {
    console.error("Error initializing modal:", error);
    alert("There was an error showing the order confirmation. Your order has been placed successfully.");
    return;
  }

  // Add event listener for modal hidden event
  modal.addEventListener('hidden.bs.modal', function () {
    window.location.reload();
  });

  // Show modal
  modalInstance.show();

  //Play advanced confirmation sound
  playAdvancedConfirmationSound();
  sendWebPushNotification(order.partyName);
  // Send notification to Telegram
  sendTelegramNotification(order.partyName, order.totalQuantity, order.orderNumber, imgData);

  // Update pending orders list
  loadPendingOrders();
}

function sendWebPushNotification(partyName) {
  const apiKey = 'b285a62d89f9a1576f806016b692f5b4';
  const token = '98413';

  const payload = {
    badge:'https://i.postimg.cc/L8PyLd3q/BO-LD-3.png',
    title: 'HC LOV OMS',
    message: `New lOVABLE Order for ${partyName}`,
    target_url: 'https://ka-oms.netlify.app', // Replace with your website URL
    icon: 'https://i.postimg.cc/L8PyLd3q/BO-LD-3.png'
  };

  fetch('https://api.webpushr.com/v1/notification/send/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'webpushrKey': apiKey,
      'webpushrAuthToken': token
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => console.log('Notification sent:', data))
  .catch(error => console.error('Error sending notification:', error));
}

// Helper function to create the modal structure
function createModal(partyName, dateTime, orderNumber) {
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'orderConfirmationModal';
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'orderConfirmationModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="orderConfirmationModalLabel">Order Confirmation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Thank you for your order!</p>
          <p>Party Name: ${partyName}</p>
          <p>Date & Time: ${new Date(dateTime).toLocaleString()}</p>
          <p>Order Number: <span class="order-number">${orderNumber}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;

  return modal;
}


// ---------------Order Processing
// ---------------Order Processing

function handlePlaceOrder() {
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  placeOrderBtn.disabled = true;
  placeOrderBtn.textContent = "Processing...";

  const modalContent = document.querySelector("#orderSummaryModal .modal-content");
  
  const totalQuantity = calculateTotalQuantity();
  const partyName = document.getElementById("partySearch").value;
  const dateTime = new Date().toISOString();
  const orderDate = dateTime.split('T')[0]; // Get just the date part
  const orderNote = document.getElementById("orderNote").value.trim(); // Get the order note

  html2canvas(modalContent).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    
    // Save the image
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${partyName.replace(/\s+/g, "_")}_${dateTime.replace(/[:.]/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Check for existing order
    checkExistingOrder(partyName, orderDate)
      .then((existingOrder) => {
        if (existingOrder) {
          // Ask user if they want to merge
          return new Promise((resolve) => {
            if (confirm(`Another order for ${partyName} on ${orderDate} already exists. Do you want to add to the same order?`)) {
              resolve({ merge: true, existingOrder });
            } else {
              resolve({ merge: false });
            }
          });
        } else {
          return { merge: false };
        }
      })
      .then(({ merge, existingOrder }) => {
        if (merge) {
          // Merge with existing order
          const mergedOrder = mergeOrders(existingOrder, {
            partyName: partyName,
            dateTime: dateTime,
            items: cart,
            status: "Pending",
            totalQuantity: totalQuantity,
            orderNote: orderNote // Add the order note
          });
          return saveOrderToFirebase(mergedOrder).then(() => mergedOrder);
        } else {
          // Create new order
          return getNextOrderNumber().then((orderNumber) => {
            const newOrder = {
              orderNumber: orderNumber,
              partyName: partyName,
              dateTime: dateTime,
              items: cart,
              status: "Pending",
              totalQuantity: totalQuantity,
              orderNote: orderNote // Add the order note
            };
            return saveOrderToFirebase(newOrder).then(() => newOrder);
          });
        }
      })
      .then((order) => {
        console.log("Order saved successfully:", order);
        
        // Close the order summary modal
        const orderSummaryModal = bootstrap.Modal.getInstance(document.getElementById("orderSummaryModal"));
        if (orderSummaryModal) {
          orderSummaryModal.hide();
        }

        // Show the order confirmation modal
        try {
          showOrderConfirmationModal(order, imgData);
        } catch (error) {
          console.error("Error showing confirmation modal:", error);
          alert("Your order has been placed successfully, but there was an error showing the confirmation. Order number: " + order.orderNumber);
        }

        // Reset the cart and update UI
        try {
          resetCart();
          updateCartButtonText(0);
          console.log("Cart reset and UI updated");
        } catch (resetError) {
          console.error("Error resetting cart:", resetError);
        }

        // Send notification to Telegram with image
       
        // Update pending orders list
        loadPendingOrders();
      })
      .catch((error) => {
        console.error("Error in order placement process:", error);
        alert("An error occurred during the order process. Please try again.");
      })
      .finally(() => {
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = "Place Order";
      });
  });
}

function checkExistingOrder(partyName, orderDate) {
  return firebase.database().ref("orders")
    .orderByChild("partyName")
    .equalTo(partyName)
    .once("value")
    .then((snapshot) => {
      let existingOrder = null;
      snapshot.forEach((childSnapshot) => {
        const order = childSnapshot.val();
        if (order.dateTime.split('T')[0] === orderDate) {
          existingOrder = { ...order, key: childSnapshot.key };
          return true; // Break the loop
        }
      });
      return existingOrder;
    });
}

function mergeOrders(existingOrder, newOrder) {
  console.log('Merging orders:', { existingOrder, newOrder });
  
  // Merge items by concatenating arrays instead of merging
  existingOrder.items = [...(existingOrder.items || []), ...(newOrder.items || [])];
  
  // Update total quantity
  existingOrder.totalQuantity = (existingOrder.totalQuantity || 0) + (newOrder.totalQuantity || 0);
  
  // Mark as modified
  existingOrder.orderNumber = `Modified ${existingOrder.orderNumber.replace('Modified ', '')}`;
  
  // Add a timestamp for the modification
  existingOrder.lastModified = new Date().toISOString();
  
  console.log('Merged order:', existingOrder);
  return existingOrder;
}
function mergeItems(existingItems, newItems) {
  console.log('Merging items:', { existingItems, newItems });
  let mergedItems = [...existingItems];
  let nextIndex = mergedItems.length;
  
  newItems.forEach((newItem) => {
    const existingItemIndex = mergedItems.findIndex(item => 
      item.id === newItem.id && item.color === newItem.color
    );
    
    if (existingItemIndex !== -1) {
      // Merge sizes for existing item
      mergedItems[existingItemIndex] = mergeSizes(mergedItems[existingItemIndex], newItem);
    } else {
      // Add new item at the next available index
      mergedItems[nextIndex] = { ...newItem };
      nextIndex++;
    }
  });
  
  console.log('Merged items:', mergedItems);
  return mergedItems;
}

function mergeSizes(existingItem, newItem) {
  console.log('Merging sizes:', { existingItem, newItem });
  const mergedItem = { ...existingItem };
  
  if (newItem.sizes && typeof newItem.sizes === 'object') {
    mergedItem.sizes = mergedItem.sizes || {};
    Object.entries(newItem.sizes).forEach(([size, quantity]) => {
      mergedItem.sizes[size] = (mergedItem.sizes[size] || 0) + quantity;
    });
  }
  
  console.log('Merged item:', mergedItem);
  return mergedItem;
}

function saveOrderToFirebase(order) {
  console.log('Saving order to Firebase:', order);
  
  if (order.key) {
    // Update existing order
    return firebase.database().ref(`orders/${order.key}`).set(order)
      .then(() => {
        console.log('Order updated successfully');
        return order;
      })
      .catch((error) => {
        console.error('Error updating order:', error);
        throw error;
      });
  } else {
    // Create new order
    return firebase.database().ref("orders").push(order)
      .then((ref) => {
        console.log('New order created successfully');
        order.key = ref.key;
        return order;
      })
      .catch((error) => {
        console.error('Error creating new order:', error);
        throw error;
      });
  }
}

function getNextOrderNumber(maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(retriesLeft) {
      firebase
        .database()
        .ref("orderCounter")
        .transaction((current) => {
          return (current || 0) + 1;
        })
        .then((result) => {
          if (result.committed) {
            resolve(`K${result.snapshot.val()}`);
          } else {
            throw new Error("Failed to commit transaction");
          }
        })
        .catch((error) => {
          console.error(
            `Error getting next order number (${
              maxRetries - retriesLeft + 1
            }/${maxRetries}):`,
            error
          );
          if (retriesLeft > 0) {
            setTimeout(() => attempt(retriesLeft - 1), delay);
          } else {
            reject(
              new Error("Max retries reached. Unable to get next order number.")
            );
          }
        });
    }
    attempt(maxRetries);
  });
}


//----------------Miscellaneous
function createCategoryRadios(categories) {
  return `
        <div class="category-container">
            ${categories
              .map(
                (cat, index) => `
                <label>
                    <input type="radio" name="category" value="${cat}" ${
                  index === 0 ? "checked" : ""
                }>
                    ${cat}
                </label>
            `
              )
              .join("")}
        </div>
    `;
}

  //-------------------------------non important--------------------------------
 
  
  function loadNewItemsFromFirebase() {
    return firebase
      .database()
      .ref("items")
      .once("value")
      .then((snapshot) => {
        const firebaseItems = snapshot.val();
        if (firebaseItems) {
          // Convert Firebase object to array
          const firebaseItemsArray = Object.entries(firebaseItems).map(
            ([key, value]) => ({
              name: key.replace("_", "."),
              ...value,
            })
          );
  
          // Merge existing items with new items from Firebase
          items = items.filter(
            (item) =>
              !firebaseItemsArray.some((fbItem) => fbItem.name === item.name)
          );
          items = [...items, ...firebaseItemsArray];
  
          // Sort items by name
          items.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          );
  
          // Update the item search datalist
          updateItemSearchDatalist();
  
          console.log("Items loaded from Firebase:", items);
        }
      })
      .catch((error) => {
        console.error("Error loading items from Firebase:", error);
      });
  }

  /*function calculateTotalQuantity() {
    return cart.reduce((total, item) => {
      return total + Object.values(item.colors).reduce((colorTotal, sizes) => {
        return colorTotal + Object.values(sizes).reduce((sizeTotal, qty) => sizeTotal + qty, 0);
      }, 0);
    }, 0);
  }*/
  
 
/*
Sub ExtractDataToJsonFile()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim styleDict As Object
    Dim rowIndex As Long
    Dim styleName As String
    Dim color As String
    Dim size As String
    Dim sizeSet As Object
    Dim colorSet As Object
    Dim jsonOutput As String
    Dim key As Variant
    Dim sizes As Variant
    Dim colors As Variant
    Dim sizeList As String
    Dim colorList As String
    Dim fso As Object
    Dim jsonFile As Object
    Dim filePath As String
    
    ' Set the worksheet
    Set ws = ThisWorkbook.Sheets(1)
    
    ' Find the last row of data in Column C (Style)
    lastRow = ws.Cells(ws.Rows.Count, "C").End(xlUp).Row
    
    ' Create a dictionary to store unique styles, sizes, and colors
    Set styleDict = CreateObject("Scripting.Dictionary")
    
    ' Loop through each row and extract style, color, and size
    For rowIndex = 2 To lastRow ' Assuming headers are in the first row
        styleName = ws.Cells(rowIndex, 3).Value ' Style in Column C
        color = ws.Cells(rowIndex, 5).Value ' Color in Column E
        size = ws.Cells(rowIndex, 8).Value ' Size in Column H
        
        ' Check if the style already exists in the dictionary
        If Not styleDict.Exists(styleName) Then
            ' Add new entry for the style
            Set sizeSet = CreateObject("Scripting.Dictionary")
            Set colorSet = CreateObject("Scripting.Dictionary")
            styleDict.Add styleName, Array(sizeSet, colorSet)
        End If
        
        ' Add size and color to their respective dictionaries
        If Not styleDict(styleName)(0).Exists(size) Then
            styleDict(styleName)(0).Add size, Nothing
        End If
        If Not styleDict(styleName)(1).Exists(color) Then
            styleDict(styleName)(1).Add color, Nothing
        End If
    Next rowIndex
    
    ' Build the JSON output string
    jsonOutput = "["
    For Each key In styleDict.Keys
        sizes = styleDict(key)(0).Keys
        colors = styleDict(key)(1).Keys
        
        ' Convert size and color arrays to comma-separated strings
        sizeList = Join(sizes, """, """)
        colorList = Join(colors, """, """)
        
        ' Format the JSON output
        jsonOutput = jsonOutput & "{""name"": """ & key & """, " & vbCrLf
        jsonOutput = jsonOutput & """sizes"": [""" & sizeList & """], " & vbCrLf
        jsonOutput = jsonOutput & """colors"": [""" & colorList & """]}," & vbCrLf
    Next key
    
    ' Remove the trailing comma from the last entry
    If Len(jsonOutput) > 0 Then
        jsonOutput = Left(jsonOutput, Len(jsonOutput) - 3) ' Remove the trailing comma and new line
    End If
    jsonOutput = jsonOutput & vbCrLf & "]"
    
    ' Set the file path to save the JSON file
    filePath = Application.DefaultFilePath & "\ExtractedData.json"
    
    ' Write the JSON output to a file
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set jsonFile = fso.CreateTextFile(filePath, True, False) ' Create a new file (overwrite if exists)
    jsonFile.WriteLine jsonOutput
    jsonFile.Close
    
    ' Inform the user
    MsgBox "JSON file created successfully at: " & filePath
    
End Sub

*/
