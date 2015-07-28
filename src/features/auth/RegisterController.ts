/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

export default class RegisterCtrl {
	
    static $inject = ["$stateParams"];

    constructor(private $stateParams) {

	}
	
	// Dummy Submit Form (Remove this)
	//----------------------------------------------
	// This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
    dummy_submit_form($form)
    {
    	if($form.valid())
    	{
    		this.form_loading($form);
    		
    		setTimeout(function() {
    			this.form_success($form);
    		}, 2000);
    	}
    }
    
    
  	// Options for Message
	//----------------------------------------------
    private options = {
	  'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
	  'btn-success': '<i class="fa fa-check"></i>',
	  'btn-error': '<i class="fa fa-remove"></i>',
	  'msg-success': 'All Good! Redirecting...',
	  'msg-error': 'Wrong login credentials!',
	  'useAJAX': true,
    };
    
    // Loading
    //----------------------------------------------
    remove_loading($form)
    {
    	$form.find('[type=submit]').removeClass('error success');
    	$form.find('.login-form-main-message').removeClass('show error success').html('');
    }
    
    form_loading($form)
    {
      $form.find('[type=submit]').addClass('clicked').html(this.options['btn-loading']);
    }
    
    form_success($form)
    {
      $form.find('[type=submit]').addClass('success').html(this.options['btn-success']);
      $form.find('.login-form-main-message').addClass('show success').html(this.options['msg-success']);
    }
    
    form_failed($form)
    {
    	$form.find('[type=submit]').addClass('error').html(this.options['btn-error']);
    	$form.find('.login-form-main-message').addClass('show error').html(this.options['msg-error']);
    }
  
  
}

angular.module("AuthModule").controller("RegisterController", RegisterCtrl);

