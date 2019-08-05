import { Component, EventEmitter, Output} from '@angular/core';
import { MainService } from '../../../services/main.service';
import { responseData } from 'src/app/interfaces/resposeData';
@Component({
    selector: 'app-fileUpload',
    templateUrl: './upload.component.html',
    providers: [MainService]
})

export class FileUpload {

    @Output() responseData = new EventEmitter<responseData>();
    private inventroyCode: String = null;
    public errImg :string = '../../../../assets/images/sucess-icon.svg';
    constructor(private service: MainService) {
        
    }
    // Handle Upload File
    handlerUploadFile(file) {
        let files = file.target.files;
        let types = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel", "application/xlsx"]
        if (types.includes(files[0].type)) {
            // this.file = files[0]
            this.responseData.emit({ file: files[0], message: null })
            this.service.UploadFile(files[0]).subscribe(e => {
                this.responseData.emit({ file: null, message: e })
            }, error => { this.responseData.emit({ file: null, message: error }) })
        }
    }


    InvetoryGenrator(){
        setTimeout(()=>{this.inventroyCode = `18/7/2019 last updated`;}, 2000)
        if(this.inventroyCode){
            return true
        }else{
            return false;
        }
    }

}

