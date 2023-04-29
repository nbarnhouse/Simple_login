//
//  LoginView.swift
//  Simple_login
//
//  Created by Nicole Barnhouse on 3/21/23.
//

import SwiftUI


struct LoginView: View {
    @Binding var currentShowingView: String
    
    @State private var email: String = ""
    @State private var password: String = ""

    var body: some View {
        ZStack{
            Color.white.edgesIgnoringSafeArea(.all)
            
            VStack {
                HStack{//1//
                    Text("Welcome Back!")
                        .font(.largeTitle)
                        .bold()
                    
                    Spacer()
                }//End of HStack 1//
                
                .padding()
                .padding(.horizontal, 50)
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
                        Text("Submit Now")
                            .foregroundColor(Color.white)
                            .font(.title2)
                        
                            .frame(maxWidth: 90)
                            .padding(4)
                        
                            .background(
                                RoundedRectangle(cornerRadius: 10)
                                    .fill(Color.green)
                            )
                            
                    })
                
                
                
                .padding(.horizontal)
                
                Spacer()
                    
                Button(action: {
                        print("Button tapped!")
                    }, label: {
                        Text("Forgot Password")
                            .foregroundColor(Color.black)
                    })
                    
                .padding(3)
                
                
                Text("Don't Have an account?")
                Button(action: {
                    withAnimation {
                        self.currentShowingView = "signup"
                    }
                  }){
                        Text ("Register")
                    }
                
            } //End of VStack
            
        }
    }
                
}
        
    
