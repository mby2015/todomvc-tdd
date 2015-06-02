describe('item', function() {

	var item;

	beforeEach(function() {
		item = new Item({
			subject: 'subject1',
			complete: false
		});
	});

	it('추가(생성)', function() {
		expect(item).toBeDefined();
	});

	it('추가(생성) 데이터가 유효하다.', function() {
		expect(item.subject).toBe('subject1');
		expect(item.complete).toBe(false);
	});

	it('추가(생성) 옵션을 입력하지 않았을 경우도 기본 데이터가 셋팅된다.', function() {
		var item = new Item();

		expect(item.subject).toBe('noname');
		expect(item.complete).toBe(false);
	});

	it('상태변경(수정)', function() {
		item.toggle();
		expect(item.complete).toBe(true);
	});

	it('내용변경(수정)', function() {
		item.setSubject('낙타');
		expect(item.subject).toBe('낙타');
	});

});