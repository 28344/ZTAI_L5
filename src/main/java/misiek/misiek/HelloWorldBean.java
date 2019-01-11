package misiek.misiek;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

    public String toString(){
        return String.format("HelloWordlBeane [message=%s]", message);
    }
}