//
//  SignupView.swift
//  Simple_login
//
//  Created by Nicole Barnhouse on 3/22/23.
//

import SwiftUI

struct SignupView: View {
    @Binding var currentShowingView: String
    
    @State private var email: String = ""
    @State private var password: String = ""

    var body: some View {
        ZStack{
            Color.white.edgesIgnoringSafeArea(.all)
            
            VStack {
                HStack{//1//
                    Text("Create An Account")
                        .font(.largeTitle)
                        .bold()
                        .foregroundColor(Color.black)
                    
                    Spacer()
                }//End of HStack 1//
                
                .padding()
                .padding(.horizontal, 20)
                .padding(.top)
                
              

                Image("letter-c")
                    .resizable()
                    .frame(width: 200.0, height: 200.0)
                
                .padding()
                .padding()
                
                HStack{//2//
                    Image("email")
                        .resizable()
                        .frame(width: 30.0, height: 30.0)
                    TextField("Email", text: $email)
                        .modifier(TextFieldClearButton(text: $email))
                    
                            
                }//End of HStack 2 Email
                
                .padding()
                
                /*  .overlay(
                  RoundedRectangle(cornerRadius: 10)
                  .stroke(lineWidth: 2)) */
                


                HStack{//3//
                    Image("lock")
                        .resizable()
                        .frame(width: 30.0, height: 30.0)
                    SecureField("Password", text: $password)
                        .modifier(TextFieldClearButton(text: $password))
                                        


                }//End of HStack 3 Password
                .padding()

                
                Button(action: {
                        print("Button tapped!")
                    }, label: {
                        Text("Submit")
                            .foregroundColor(Color.white)
                            .font(.title2)
                        
                            .frame(maxWidth: 90)
                            .padding(4)
                        
                            .background(
                                RoundedRectangle(cornerRadius: 10)
                                    .fill(Color.green)
                            )
                            
                    })
                
                
                
                
         
                    
                Spacer()
                    
                
                
                Text("Already have an account?")
                Button(action: {
                    withAnimation {
                        self.currentShowingView = "login"
                    }
                  }){
                        Text ("Login")
                    }
                
            } //End of VStack
            
        }
    }
                
}
