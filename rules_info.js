/*
! GRA W ŻYCIE
==========================================
? Martwa komórka, która ma dokładnie 3 żywych sąsiadów, staje się żywa w następnej jednostce czasu (rodzi się);
? Żywa komórka z 2 albo 3 żywymi sąsiadami pozostaje nadal żywa; przy innej liczbie sąsiadów umiera (z „samotności” albo „zatłoczenia”)
==========================================
? jeżeli komórka ma 3 żywych sąsiadów --> OŻYWA
? Żywa komórka mająca [2,3] żywych sąsiadów --> ZOSTAJE ŻYWA
? komórka z [1,>3] żywymi sąsiadami --> UMIERA
==========================================
! PRZYKŁADOWE PRZYPADKI:
? X --> żywa komórka
? O --> martwa komórka
==========================================
* stan obecny        ==> następny stan
==========================================
*  O O O             ==>      O O O
*  O X X <--[żyje]   ==>      O X X
*  O O X             ==>      O x X
==========================================
*  O X O             ==>      O o O
*  O X O <--[ożyje]  ==>      x X x
*  O X O             ==>      O o O
==========================================
*  O O X             ==>      O x X
*  O X X <--[umrze]  ==>      O o o
*  O X X             ==>      O X X
==========================================
*/
