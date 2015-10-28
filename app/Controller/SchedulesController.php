<?php
//改行コードを正しく読み込むための設定
ini_set('auto_detect_line_endings', true);
class SchedulesController extends AppController {
	public $helpers = array('Html', 'Form', 'Text');
    public $uses = array('Schedule','Event');
	public function index(){
        $this->set('schedules', $this->Schedule->find('all'));
        $this->set('events', $this->Event->find('all'));
        $this->set('day_diff', $this->Event->dayDiff());
    }
	public function import(){
        if($this->request->is('post')){
            $up_file = $this->data['Schedule']['CsvFile']['tmp_name'];
            $fileName = 'ScheduleTest.csv';
            if(is_uploaded_file($up_file)){
                move_uploaded_file($up_file, $fileName);
                $this->Schedule->loadCSV($fileName);
                // $this->Schedule->setFlash('');
                $this->redirect(array('action'=>'index'));
            }
        }else{
        	echo "error";
        }
    }
}
?>