package com.juald.controller;
import com.juald.model.BIke;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//trashti


public class BikeController {
	private static final long serialVersionUID = 1L;
	public static final String lIST_STUDENT = "/listStudent.jsp";
	public static final String INSERT_OR_EDIT = "/student.jsp";
       
    public BikeController() {
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String forward = "";
		String action = request.getParameter( "action" );
		
		if( action.equalsIgnoreCase( "delete" ) ) {
			forward = lIST_STUDENT;
			int studentId = Integer.parseInt( request.getParameter("studentId") );
		}
		else if( action.equalsIgnoreCase( "edit" ) ) {
			forward = INSERT_OR_EDIT;
			int studentId = Integer.parseInt( request.getParameter("studentId") );
		}
		else if( action.equalsIgnoreCase( "insert" ) ) {
			forward = INSERT_OR_EDIT;
		}
		else {
			forward = lIST_STUDENT;
		}
		RequestDispatcher view = request.getRequestDispatcher( forward );
		view.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BIke student = new BIke();
		student.setFirstName( request.getParameter( "firstName" ) );
		student.setLastName( request.getParameter( "lastName" ) );
		student.setCourse( request.getParameter( "course" ) );
		student.setYear( Integer.parseInt( request.getParameter( "year" ) ) );
		String studentId = request.getParameter("studentId");
		


	}
}
