<template>
  
<div>
	<div style="position: relative;border: 5px solid lightblue;width: 150px;height:150px;margin: 5px auto;border-radius: 50%;">
		<img src="/images/头像/头像1.png" alt="选择并上传头像" id="avatar_img"
			 style="width: 140px;height: 140px;left:0;top: 0;border-radius: 50%;"/>
		<input type="file" id="avatar_file" name="avatar_file"
			   accept="image/jpg,image/png,image/gif"
			   style="width: 100%;height:100%;opacity: 0;position: absolute;left:0;top: 0;"/>
	</div>
	<br/>
</div>
</template>

<script>
  export default {
    props:{
      default: '', // 默认显示的图片
      index: '' // 如果一个页面里用到了多个图片上传组件，这个参数用来区别他们
    },

    data() {
      return {
        pictureUrl: '', // 用来预览的图片路径
        showIcon: true, // 有图片的时候显示图片，没图片的时候显示成一个加号
        picturePath: '' // 传给接口的那个图片路径
      };
    },


    methods: {
      fileChange (e) {
        let file = e.target.files[0]
        let filename = e.currentTarget.files[0]
        var formData = new FormData();
        formData.append("file", file);

        // 如果资源传到自己的服务器上，需要以上四行代码，转换一下文件格式，如果直接上传文件到cdn，则不需要
        let url = YOURURL
        axiosProxyFiles.post(url, formData)
        .then(res=>{
          if(res.data.errorCode=='0'){
            this.successMessage('文件上传成功')
            this.pictureUrl = res.data.data.url
            this.picturePath = res.data.data.path
            this.showIcon = false
            if(this.index) {
              this.$emit('change', this.pictureUrl, this.index, this.picturePath)
            } else {
              this.$emit('change', this.pictureUrl)
            }
          }
          else {
            if(res.data.errorMessage) {
              this.errorMessage(res.data.errorMessage)
            } else {
              this.errorMessage('文件上传失败')
            }
          }
        })
        .catch(err=>{console.log(err)})
      },
    },
    mounted () {
      if(this.default != undefined) {
        if(this.default == '') {
          this.showIcon = true
        } else {
          this.showIcon = false
        }
        this.pictureUrl = this.default
      } else {
        this.showIcon = true
      }
    }

};
</script>

// 本demo相关样式用scss编写，注意style后面的lang=‘scss’

<style lang='scss' scoped>
  .uploader {
    position: relative;
  }
  .uploader-container {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    line-height: 146px;
    vertical-align: top;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    i {
      font-size: 28px;
      color: #8c939d;
    }
  }

  .uploader-action {
    position: absolute;
    top: 0;
    opacity: 0;
    display: block;
    width: 148px;
    height: 148px!important;
  }

  .hide {
    visibility: hidden;
  }

  .show {
    visibility: visible;
  }
</style>
