a).	The	XML	above	lists	four	articles	by	four	different	authors.	Your	task	is	to
generate	a	matrix	similar	to	the	one	shown	above.	Each	cell	i,	j should	list	the
number	of	articles	(say	N)	co-authored	by	the	author	in	row	i and	the	author	is
column	j.	 You	may	output	your	results	to	the	command	line	as	a	textual
representation.

To Start the code : "npm start"


b).	How	would	you	design	a	test	suite	for	the	above	application?	You	are	not
required	to	write	any	test	cases	but	to	describe	your	processes.

1. The xml is read and converted into a object.
    - Test case should be written to test the object formation. The following condition should be true.
        The number of articles object created ==== 'articles' found in the xml document.
2. New citations are created using the Articles Data.
    - All the article objects are converted into collection of articles and authors in citations
3. When new Articles are created, correspondingly new authors are created using the authors data.
4. When every article is created, the authors data is updated with all the co-authors data, that he has collaborated with.


c).	The	above	XML	format	is	very	similar	to	the	Medline	dataset,	which	contains
over	22	million	records.	What	problems	do	you	foresee	in	scaling	the	above
solution	to	these	numbers of	records.

1. The xml document is read and stored in a object. It should be converted into a stream data.
2. The scaling and searching mechanism takes time in the O(1). So this should not be a issue.
3. The articles data is stored as a array, it can be converted into a hash map. So that retrieval mechanism becomes easier.
