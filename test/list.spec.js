describe('리스트', function() {
	it('리스트 생성', function() {
		var list = new List();
		expect(list.itemList).toBeDefined();
		expect(list).toBeDefined();
	});

	it('아이템추가', function() {
		var list = new List();
		list.addItem();
		expect(list.itemList.length).toBe(1);
	});

	it('아이템추가(옵션추가)', function() {
		var list = new List();
		list.addItem({
			subject: '냉장고'
		});
		expect(list.itemList[0].subject).toBe('냉장고');
		expect(list.itemList[0].complete).toBe(false);
	});

	it('아이템이 없을때 삭제하는 경우', function() {
		var list = new List();
		list.removeItem();
		expect(list.itemList.length).toBe(0);
	});

	it('아이템 삭제(첫번째)', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}
		list.removeItem(0);
		expect(list.itemList.length).toBe(2);
		expect(list.itemList[0].subject).toBe('냉장고1');
	});

	it('아이템 삭제(두번째)', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}
		list.removeItem(1);
		expect(list.itemList.length).toBe(2);
		expect(list.itemList[1].subject).toBe('냉장고2');
	});

	it('아이템 상태변경', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}
		list.updateItem(0);
		expect(list.itemList[0].complete).toBe(true);
	});

	it('아이템 상태변경 후 리스트 상태 확인', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}
		expect(list.updateItem(0)).toBe(false);
		expect(list.updateItem(1)).toBe(false);
		expect(list.updateItem(2)).toBe(true);
	});

	it('아이템 제목 변경', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}
		list.updateItem(1, '부탁해');
		expect(list.itemList[1].subject).toBe('부탁해');
	});

	it('리스트 전체 비완료 상태 확인', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
		}

		expect(list.getState()).toBe(false);
	});

	it('리스트 전체 완료 상태 확인', function() {
		var list = new List();
		for(var i=0; i<3; i++) {
			list.addItem({
				subject: '냉장고'+i,
				complete: true
			});
		}

		expect(list.getState()).toBe(true);
	});

	it('리스트 완료 목록 가져오기', function() {
		var list = new List();
		for(var i=0; i<10; i++) {
			list.addItem({
				subject: '냉장고'+i
			});
			if(i%2 === 0) list.updateItem(i);
		}
		var filterList = list.getItems(true);
		expect(filterList[0].complete).toBe(true);
		expect(filterList.length).toBe(5);
	});






















});